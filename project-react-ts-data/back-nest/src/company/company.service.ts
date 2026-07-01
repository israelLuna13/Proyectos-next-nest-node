import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { FindManyOptions, Repository } from 'typeorm';
// import { CreateCompanyDto } from './dto/create-company.dto';
// import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  // create(createCompanyDto: CreateCompanyDto) {
  //   return 'This action adds a new company';
  // }

  async findAll(take: number, skip: number) {
    const options: FindManyOptions<Company> = {
      take,
      skip,
    };
    const [data, total] = await this.companyRepository.findAndCount(options);

    if (total === 0) throw new NotFoundException('Not Found Companys');

    return { data, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  // update(id: number, updateCompanyDto: UpdateCompanyDto) {
  //   return `This action updates a #${id} company`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} company`;
  // }
}
