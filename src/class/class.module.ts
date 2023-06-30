import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ClassController } from './class.controller';
import { ClassProviders } from './class.providers';
import { ClassService } from './class.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [ClassService, ...ClassProviders],
})

export class ClassModule {}