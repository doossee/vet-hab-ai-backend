import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entities';
import { AuthGuard } from '@nestjs/passport';
import { IsAuthenticated } from './decorators';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({ type: AuthEntity })
  @Post('login')
  async login(@Body() data: LoginDto) {
    return new AuthEntity(await this.authService.login(data));
  }

  @IsAuthenticated()
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Req() request) {
    const user = request.user;
    return await this.authService.logout(user.id);
  }

  @ApiOkResponse({ type: AuthEntity })
  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  async refresh(@Req() request) {
    const user = request.user;
    return new AuthEntity(
      await this.authService.refresh(user.id, user.refreshToken),
    );
  }
}
