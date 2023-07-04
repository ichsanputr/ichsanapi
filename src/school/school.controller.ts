import { UploadedFile, UseInterceptors, ParseFilePipeBuilder, HttpStatus, Controller, Get, Res, Body, Post, Delete, Put, Param, UseGuards } from '@nestjs/common';
import { ApiConsumes, ApiOkResponse, ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { SchoolService } from './school.service';
import { Response } from 'express';
import { respAddSchoolOK, respDeleteSchoolOK, respPutSchoolOK } from './schema/response.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  updateSchoolDTO,
  addCsvDTO,
  paramSchoolById,
  addSchoolDTO,
  deleteSchoolDTO
} from './dto/school.dto'
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('school')
@ApiTags('School')
@ApiBearerAuth('jwtToken')
export class SchoolController {
  constructor(
    private readonly schoolService: SchoolService
  ) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get all school'
  })
  async AllSchool(@Res() res: Response) {
    let data = await this.schoolService.getAllSchool()

    res.status(200).send({
      message: "Successfully get all school data",
      data: data,
      status: true
    })
  }

  @Post('/')
  @ApiOkResponse({
    type: respAddSchoolOK
  })
  @ApiOperation({
    summary: 'Add school'
  })
  async AddSchool(@Body() body: addSchoolDTO, @Res() res: Response) {
    let resp = await this.schoolService.addSchool(body)

    if (resp) {
      res.status(200).send({
        message: `Succesfully add data for school name ${resp.dataValues.school_name}`
      })
    }
  }

  @Delete('/')
  @ApiOkResponse({
    type: respDeleteSchoolOK
  })
  @ApiOperation({
    summary: 'Delete school'
  })
  async DeleteSchool(@Body() body: deleteSchoolDTO, @Res() res: Response) {
    let resp = await this.schoolService.deleteSchool(body.id)

    if (resp) {
      res.status(200).send({
        message: `Succesfully delete school for id ${resp}`
      })
    }
  }

  @Put('/')
  @ApiOkResponse({
    type: respPutSchoolOK
  })
  @ApiOperation({
    summary: 'Update school'
  })
  async UpdateSchool(@Body() body: updateSchoolDTO, @Res() res: Response) {
    let resp = await this.schoolService.updateSchool(body)

    if (resp) {
      res.status(200).send({
        message: `Succesfully update school for id ${resp}`
      })
    }
  }

  @Get('/student/:id')
  @ApiOperation({
    summary: 'Get school and its student'
  })
  async getSchoolById(@Param() param: paramSchoolById, @Res() res: Response) {
    let resp = await this.schoolService.getStudent(param.id)

    if (resp) {
      res.status(200).send({
        message: `Succesfully get detail school for id ${resp.dataValues.id}`,
        data: resp.dataValues
      })
    }
  }

  @Post('/csv')
  @ApiOperation({
    summary: 'Add student by CSV file'
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async addStudentCSV(
    @Res() res: Response, 
    @UploadedFile(new ParseFilePipeBuilder()
    .addFileTypeValidator({
      fileType: 'csv',
    })
    .build({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
    }),) csvFile: Express.Multer.File,
    @Body() body: addCsvDTO
  )
  {
    const _ = await this.schoolService.addSchoolCSV(csvFile.buffer)

    res.status(200).send({
      message: 'Succesfully add data from csv file'
    })
  }
}