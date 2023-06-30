import { Get, Res, Controller, UseGuards } from '@nestjs/common'
import { UserService } from './user.service';
import { Response } from 'express';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('User')
@Controller('user')
@ApiBearerAuth('jwtToken')
@UseGuards(AuthGuard)
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/')
    @ApiOperation({
        summary: "Get users"
    })
    async getUsers(@Res() res: Response) {
        let resp = await this.userService.getUsers()

        res.status(200).send({
            message: "Successfully get all user",
            data: resp
        })
    }
}
