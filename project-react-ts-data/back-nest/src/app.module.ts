import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tyeOrmConfig } from './config/typeorm.config';
import { SalaryModule } from './salary/salary.module';
import { CompanyModule } from './company/company.module';
import { LocationModule } from './location/location.module';
import { FactModule } from './fact/fact.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: tyeOrmConfig,
      inject: [ConfigService],
    }),
    SalaryModule,
    CompanyModule,
    LocationModule,
    FactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
