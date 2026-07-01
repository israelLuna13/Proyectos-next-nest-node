import { Controller, Get, Param, Query } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { GetSalaryQuerysDto } from './dto/get-salary-querys.dto';
// import { CreateSalaryDto } from './dto/create-salary.dto';
// import { UpdateSalaryDto } from './dto/update-salary.dto';

@Controller('salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  // @Post()
  // create(@Body() createSalaryDto: CreateSalaryDto) {
  //   return this.salaryService.create(createSalaryDto);
  // }

  @Get()
  findAll(@Query() query: GetSalaryQuerysDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 1;
    return this.salaryService.findAll(take, skip);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salaryService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSalaryDto: UpdateSalaryDto) {
  //   return this.salaryService.update(+id, updateSalaryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.salaryService.remove(+id);
  // }
}
