import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { DatabaseModule } from '../database/database.module';
import { StudentProviders } from './student.providers';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [StudentController],
  providers: [StudentService, ...StudentProviders],
})

export class StudentModule {}