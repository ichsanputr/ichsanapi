import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SchoolController } from './school.controller';
import { SchoolProviders } from './school.providers';
import { SchoolService } from './school.service';
import { CsvModule } from 'nest-csv-parser';

@Module({
  imports: [DatabaseModule, CsvModule],
  controllers: [SchoolController],
  providers: [SchoolService, ...SchoolProviders],
})

export class SchoolModule {}