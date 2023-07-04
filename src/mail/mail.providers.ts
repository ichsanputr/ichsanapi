import { Mail } from './mail.entity';
import { SESClient } from '@aws-sdk/client-ses';

export const MailProviders = [
  {
    provide: 'MAIL_REPOSITORY',
    useValue: Mail,
  },
  {
    provide: 'SES_CLIENT',
    useFactory: async () => {
      const ses = new SESClient({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS,
          secretAccessKey: process.env.AWS_SECRET
        }
      })

      return ses
    }
  }
];
