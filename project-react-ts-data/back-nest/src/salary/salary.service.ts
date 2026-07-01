import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateSalaryDto } from './dto/create-salary.dto';
// import { UpdateSalaryDto } from './dto/update-salary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salary } from './entities/salary.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class SalaryService {
  constructor(
    @InjectRepository(Salary)
    private readonly salaryRepository: Repository<Salary>,
  ) {}
  // create(createSalaryDto: CreateSalaryDto) {
  //   return 'This action adds a new salary';
  // }

  async findAll(take: number, skip: number) {
    const options: FindManyOptions<Salary> = {
      take,
      skip,
    };
    const [data, total] = await this.salaryRepository.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('Not Found Salarys');
    }
    return { data, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} salary`;
  }

  // update(id: number, updateSalaryDto: UpdateSalaryDto) {
  //   return `This action updates a #${id} salary`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} salary`;
  // }
}
