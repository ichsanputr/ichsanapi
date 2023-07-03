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
        host: 'smtp.sendgrid.net',
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
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