import { Module } from '@nestjs/common';
import { FactService } from './fact.service';
import { FactController } from './fact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactJobs } from './entities/fact.entity';
import { Company } from 'src/company/entities/company.entity';
import { Salary } from 'src/salary/entities/salary.entity';
import { Location } from 'src/location/entities/location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactJobs, Company, Salary, Location])],
  controllers: [FactController],
  providers: [FactService],
})
export class FactModule {}
