import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { DatabaseModule } from '../database/database.module';
import { StudentProviders } from './student.providers';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    DatabaseModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        secure: true,
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
      template: {
        dir: process.cwd() + '/src/student/template',
        adapter: new HandlebarsAdapter(), 
        options: {
          strict: true,
        },
      },
    })
  ],
  controllers: [StudentController],
  providers: [StudentService, ...StudentProviders],
})

export class StudentModule {}