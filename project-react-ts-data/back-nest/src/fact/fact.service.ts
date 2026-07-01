import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFactDto } from './dto/create-fact.dto';
import { UpdateFactDto } from './dto/update-fact.dto';
import { FindManyOptions, Repository } from 'typeorm';
import { FactJobs } from './entities/fact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Salary } from 'src/salary/entities/salary.entity';
import { Location } from 'src/location/entities/location.entity';
import { Company } from 'src/company/entities/company.entity';

@Injectable()
export class FactService {
  constructor(
    @InjectRepository(FactJobs)
    private readonly factRepository: Repository<FactJobs>,
    @InjectRepository(Salary)
    private readonly salaryRepository: Repository<Salary>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  async create(createFactDto: CreateFactDto) {
    const salary = await this.salaryRepository.findOneBy({
      salary_id: createFactDto.salary_id,
    });

    if (!salary) {
      const errors: string[] = [];
      errors.push('Not found salary');
      throw new NotFoundException(errors);
    }

    const location = await this.locationRepository.findOneBy({
      location_id: createFactDto.location_id,
    });

    if (!location) {
      const errors: string[] = [];
      errors.push('Not found location');
      throw new NotFoundException(errors);
    }

    const company = await this.companyRepository.findOneBy({
      company_id: createFactDto.company_id,
    });

    if (!company) {
      const errors: string[] = [];
      errors.push('Not found company');
      throw new NotFoundException(errors);
    }
    return this.factRepository.save({
      ...createFactDto,
      salary,
      location,
      company,
    });
  }

  async findAll(take: number, skip: number) {
    const options: FindManyOptions<FactJobs> = {
      take,
      skip,
      relations: {
        company: true,
        salary: true,
        location: true,
      },
    };

    const [data, total] = await this.factRepository.findAndCount(options);
    if (total === 0) {
      throw new NotFoundException('Not found Facts');
    }
    return { data, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} fact`;
  }

  update(id: number, updateFactDto: UpdateFactDto) {
    return `This action updates a #${id} fact`;
  }

  remove(id: number) {
    return `This action removes a #${id} fact`;
  }
}
