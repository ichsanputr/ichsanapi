import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailProviders } from './mail.providers';
import { HttpModule } from '@nestjs/axios';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
    imports: [
        DatabaseModule,
        HttpModule,
        MailerModule.forRootAsync({
            useFactory: () =>({
                transport: {
                    host: 'email-smtp.us-east-1.amazonaws.com',
                    secure: false,
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                }
            })
        })
    ],
    exports: [MailService],
    controllers: [MailController],
    providers: [MailService, ...MailProviders]
})
export class MailModule { }
