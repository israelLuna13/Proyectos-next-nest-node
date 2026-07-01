import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { FactJobs } from 'src/fact/entities/fact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Location, FactJobs])],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
