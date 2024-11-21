import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { AuthEntity } from './entities';
import { LoginDto } from './dto';
import { JwtPayload } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(data: LoginDto): Promise<AuthEntity> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { phone: data.phone },
    });

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload: JwtPayload = { sub: user.id, role: user.role };

    const accessToken = await this.generateToken(
      payload,
      'JWT_ACCESS_SECRET',
      'JWT_ACCESS_EXPIRE',
    );
    const refreshToken = await this.generateToken(
      payload,
      'JWT_REFRESH_SECRET',
      'JWT_REFRESH_EXPIRE',
    );

    await this.updateRefreshToken(user.id, refreshToken);

    return {
      accessToken,
      refreshToken,
      userId: user.id,
      userRole: user.role,
    };
  }

  async logout(userId: number) {
    if (!userId) {
      throw new UnauthorizedException('Invalid user ID');
    }

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });

    if (!user.refreshToken) {
      return {
        message: 'User is already logged out or refresh token not set.',
      };
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });

    return {
      message: 'User logged out successfully.',
      revokeAccessToken: true,
    };
  }

  async refresh(userId: number, oldRefreshToken: string) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });

    const isRefreshTokenValid = await bcrypt.compare(
      oldRefreshToken,
      user.refreshToken,
    );

    if (!isRefreshTokenValid)
      throw new ForbiddenException('Refresh token is expired or invalid');

    const payload: JwtPayload = { sub: user.id, role: user.role };

    const accessToken = await this.generateToken(
      payload,
      'JWT_ACCESS_SECRET',
      'JWT_ACCESS_EXPIRE',
    );
    const refreshToken = await this.generateToken(
      payload,
      'JWT_REFRESH_SECRET',
      'JWT_REFRESH_EXPIRE',
    );

    await this.updateRefreshToken(user.id, refreshToken);

    return {
      accessToken,
      refreshToken,
    };
  }

  private async generateToken(
    payload: JwtPayload,
    secretKey: string,
    expirationKey: string,
  ): Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>(secretKey),
      expiresIn: this.configService.get<string>(expirationKey),
    });
  }

  private async updateRefreshToken(
    userId: number,
    refreshToken: string,
  ): Promise<void> {
    const hashedToken = await bcrypt.hash(refreshToken, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashedToken },
    });
  }
}
