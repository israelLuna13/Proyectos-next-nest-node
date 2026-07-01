import { Controller, Get, Param, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { GetLocationQuerysDto } from './dto/get-location-querys.dto';
// import { CreateLocationDto } from './dto/create-location.dto';
// import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  // @Post()
  // create(@Body() createLocationDto: CreateLocationDto) {
  //   return this.locationService.create(createLocationDto);
  // }

  @Get()
  findAll(@Query() query: GetLocationQuerysDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 10;

    return this.locationService.findAll(take, skip);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
  //   return this.locationService.update(+id, updateLocationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.locationService.remove(+id);
  // }
}
