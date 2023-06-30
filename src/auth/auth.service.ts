import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { loginDTO } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ){}

    async login(data: loginDTO){
        const loggedUser = await this.userService.checkCredentials(data)

        if (!loggedUser){
            throw new UnauthorizedException()
        }

        return await this.jwtService.signAsync({name: 'ichsan'})
    }
}
