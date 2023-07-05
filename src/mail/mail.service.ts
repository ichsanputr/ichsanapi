import { Injectable, Inject } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { SESClient, VerifyEmailIdentityCommand, GetIdentityVerificationAttributesCommand, ListIdentitiesCommand } from '@aws-sdk/client-ses';
import { paramRegisterDTO } from './dto/mail.dto';

@Injectable()
export class MailService {
    constructor(
        private readonly mailerService: MailerService,
        private readonly httpService: HttpService,
        @Inject('SES_CLIENT') private readonly SES: SESClient
    ) {}

    async getQuote(email: string) {
        const { data } = await firstValueFrom(this.httpService.get('https://dummyjson.com/quotes/random'))

        let _ = await this.mailerService
            .sendMail({
                to: email,
                from: 'ichsanfadhil67@gmail.com',
                subject: 'Quote for Today ✔',
                text: data.quote
            })
    }

    async register(body: paramRegisterDTO) {
        const command = new VerifyEmailIdentityCommand({
            EmailAddress: body.email
        });
        await this.SES.send(command);
    }

    async list() {
        const getIdentity = new ListIdentitiesCommand({
            IdentityType: 'EmailAddress'
        })
        const listIdentity = await this.SES.send(getIdentity)

        const getStatus = new GetIdentityVerificationAttributesCommand({
            Identities: listIdentity.Identities
        })
        const identityStatus = await this.SES.send(getStatus)

        return identityStatus.VerificationAttributes
    }
}
