import { IsString, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';

export class HeaderDto {
  @Expose({ name: 'authorization' })
  @IsString({
    message: "Header 'authorization' wajib diisi dan harus berupa string",
  })
  authorization: string;

  @Expose({ name: 'x-api-key' })
  @IsOptional()
  @IsString()
  xApiKey?: string;
}
