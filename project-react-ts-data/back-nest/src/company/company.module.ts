import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { FactJobs } from 'src/fact/entities/fact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, FactJobs])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
