import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const RequestHeader = createParamDecorator(
  async (targetDTO: any, ctx: ExecutionContext) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const headers = ctx.switchToHttp().getRequest().headers;

    // ubah ke instance DTO
    const dto = plainToInstance(targetDTO, headers, {
      excludeExtraneousValues: true,
    });

    // validasi DTO
    const errors = await validate(dto, {
      whitelist: true,
      forbidUnknownValues: false,
    });

    if (errors.length > 0) {
      // ambil pesan error pertama yang jelas
      const firstError = errors[0];
      const constraints = Object.values(firstError.constraints ?? {});
      const message = constraints.length
        ? constraints.join(', ')
        : 'Header tidak valid';

      throw new BadRequestException(message);
    }

    return dto;
  },
);
