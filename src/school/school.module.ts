import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SchoolController } from './school.controller';
import { SchoolProviders } from './school.providers';
import { SchoolService } from './school.service';
import { CsvModule } from 'nest-csv-parser';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [DatabaseModule, CsvModule,
    MailerModule.forRoot({
      transport: {
        host: 'email-smtp.us-east-1.amazonaws.com',
        secure: false,
        auth: {
          user: 'AKIA43QSMF6KNJXLUDPN',
          pass: 'BJ6LkHFAV2KXeTlZ6czEOy0ip+Urq/dlpkQZgl4lTh1r',
        },
      },
      template: {
        dir: process.cwd() + '/src/school/template',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    })],
  controllers: [SchoolController],
  providers: [SchoolService, ...SchoolProviders],
})

export class SchoolModule { }