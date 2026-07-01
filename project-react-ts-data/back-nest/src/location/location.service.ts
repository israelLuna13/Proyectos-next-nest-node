import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateLocationDto } from './dto/create-location.dto';
// import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}
  // create(createLocationDto: CreateLocationDto) {
  //   return 'This action adds a new location';
  // }

  async findAll(take: number, skip: number) {
    const options: FindManyOptions<Location> = {
      take,
      skip,
    };

    const [data, total] = await this.locationRepository.findAndCount(options);

    if (total === 0) {
      throw new NotFoundException('Locations not founded');
    }
    return { data, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  // update(id: number, updateLocationDto: UpdateLocationDto) {
  //   return `This action updates a #${id} location`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} location`;
  // }
}
