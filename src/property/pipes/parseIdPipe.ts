import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const id = Number(value);

    if (!Number.isInteger(id)) {
      throw new BadRequestException(
        `Invalid ${metadata.data ?? 'ID'}: must be an integer`,
      );
    }

    if (id <= 0) {
      throw new BadRequestException(
        `Invalid ${metadata.data ?? 'ID'}: must be a positive number`,
      );
    }

    return id;
  }
}
