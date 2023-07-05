import { Get, Res, Controller, Post, Body } from '@nestjs/common'
import { MailService } from './mail.service';
import { Response } from 'express';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { paramQuoteDTO, paramRegisterDTO } from './dto/mail.dto';
import { UseGuards } from '@nestjs/common';

@ApiTags('Mail')
@Controller('mail')
@ApiBearerAuth('jwtToken')
@UseGuards(AuthGuard)
export class MailController {
    constructor(private readonly userService: MailService) { }

    @Post('/quote')
    @ApiOperation({
        summary: "Get random quote to your email"
    })
    async quote(@Res() res: Response, @Body() body: paramQuoteDTO) {
        let _ = await this.userService.getQuote(body.email)

        res.status(200).send({
            message: "Successfully send quote to your email"
        })
    }

    @Post('/register')
    @ApiOperation({
        summary: "Register your email account"
    })
    async register(@Res() res: Response, @Body() body: paramRegisterDTO) {
        let _ = await this.userService.register(body)

        res.status(200).send({
            message: "Please confirm verification email identity in your inbox email"
        })
    }

    @Get('/list')
    @ApiOperation({
        summary: "List email with their verification status"
    })
    async list(@Res() res: Response) {
        let respList = await this.userService.list()

        res.status(200).send({
            message: "Succesfully get email identity",
            data: respList
        })
    }
}
