import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetFactQuerysDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'Take must be a number' })
  take?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'Skip must be a number' })
  skip?: number;
}
