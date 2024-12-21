import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EntityExistValidator {
  constructor(private readonly prisma: PrismaService) {}

  async validate(model: string, value: any): Promise<boolean> {
    if (value) {
      const entity = await this.prisma[model].findUnique({
        where: { id: value },
      });
      return !!entity;
    } else {
      return false;
    }
  }
}

export function IsEntityExist(
  model: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isEntityExist',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          const validator = new EntityExistValidator(new PrismaService());
          return validator.validate(model, value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} with value ${args.value} does not exist`;
        },
      },
    });
  };
}
