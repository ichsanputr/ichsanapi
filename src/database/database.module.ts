import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers/database.providers';

@Module({
  providers: [...databaseProviders]
})
export class DatabaseModule {}
