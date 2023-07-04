import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailProviders } from './mail.providers';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        DatabaseModule,
        HttpModule
    ],
    exports: [MailService],
    controllers: [MailController],
    providers: [MailService, ...MailProviders]
})
export class MailModule { }
