import { Controller, Post, Res , Body, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { loginDTO } from './dto/login.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {

    @Inject(AuthService)
    private readonly authService: AuthService

    @Post('/login')
    @ApiOperation({
        summary: 'Login to access all api'
    })
    async Login(@Res() res: Response, @Body() body: loginDTO){

        let resp = await this.authService.login(body)

        res.status(200).send({
            message: 'Successfully login',
            token: resp
        })
    }
}
