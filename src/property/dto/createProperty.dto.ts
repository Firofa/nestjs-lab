import { IsString, IsInt, Length, IsPositive } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ always: true })
  @Length(2, 10, { message: 'error on length' })
  name: string;
  @IsString()
  description: string;
  @IsInt()
  @IsPositive()
  price: number;
}
