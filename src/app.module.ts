import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controllers';
import { ClassModule } from './class/class.module';
import { SchoolModule } from './school/school.module';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    StudentModule,
    ClassModule,
    SchoolModule,
    UserModule,
    AuthModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AuthService]
})
export class AppModule {}
