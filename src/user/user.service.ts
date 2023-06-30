import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { loginDTO } from 'src/auth/dto/login.dto';

@Injectable()
export class UserService {
    constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User){}

    async getUsers(): Promise<User[]>{
        return await this.userRepository.findAll()
    }   

    async checkCredentials(body: loginDTO): Promise<User>{
        return await this.userRepository.findOne({
            where: {
                username: body.username,
                password: body.password
            }
        })
    }
}

