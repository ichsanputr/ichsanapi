import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';

@Module({
    imports: [DatabaseModule],
    exports: [UserService],
    controllers: [UserController],
    providers: [UserService, ...UserProviders]
})
export class UserModule {}
