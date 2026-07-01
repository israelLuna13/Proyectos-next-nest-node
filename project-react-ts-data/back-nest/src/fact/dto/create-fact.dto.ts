import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFactDto {
  @IsNotEmpty({ message: 'The name cannot be empty' })
  @IsString({ message: 'Invalid name' })
  job_title: string;

  @Type(() => Number)
  @IsNotEmpty({ message: 'The rating cannot be empty' })
  @IsNumber({}, { message: 'Invalid rating' })
  rating: number;

  @Type(() => Number)
  @IsNotEmpty({ message: 'The founded cannot be empty' })
  @IsNumber({}, { message: 'Invalid founded' })
  founded: number;

  @IsNotEmpty({ message: 'The revenue cannot be empty' })
  @IsString({ message: 'Invalid revenue' })
  revenue: string;

  @Type(() => Number)
  @IsNotEmpty({ message: 'The location cannot be empty' })
  @IsInt({ message: 'Invalid location' })
  location_id: number;

  @Type(() => Number)
  @IsNotEmpty({ message: 'The company cannot be empty' })
  @IsInt({ message: 'Invalid company' })
  company_id: number;

  @Type(() => Number)
  @IsNotEmpty({ message: 'The salary cannot be empty' })
  @IsInt({ message: 'Invalid salary' })
  salary_id: number;
}
