import { Controller, Get, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { GetCompanyQuerysDto } from './dto/get-company-querys.dto';
// import { CreateCompanyDto } from './dto/create-company.dto';
// import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // @Post()
  // create(@Body() createCompanyDto: CreateCompanyDto) {
  //   return this.companyService.create(createCompanyDto);
  // }

  @Get()
  findAll(@Query() query: GetCompanyQuerysDto) {
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 10;
    return this.companyService.findAll(take, skip);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.companyService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
  //   return this.companyService.update(+id, updateCompanyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.companyService.remove(+id);
  // }
}
