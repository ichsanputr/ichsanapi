import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Response } from 'express';

@Controller()
export class AppController {
    @Get('/')
    @ApiExcludeEndpoint()
    HelloWorld(@Res() res: Response){
        res.status(200).send({
            message: "Hello! Please go to /docs for see documentation for this API"
        })
    }
}