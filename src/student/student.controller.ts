import { Controller, Get, Param, Res, Post, Body, Delete, Query, Put, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { Response } from 'express';
import { ApiOkResponse, ApiOperation, ApiParam, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import {
  respStudentAllOK,
  respAddStudentOK,
  respDeleteStudentOK,
  respStudentByIdOK
} from './schema/response.schema';
import { 
  paramUpdateStudentDTO,
  addStudentDTO,
  deleteStudentDTO,
  paramAllStudentDTO
} from './dto/student.dto'
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Student')
@Controller('student')
@ApiBearerAuth('jwtToken')
@UseGuards(AuthGuard)
export class StudentController {
  constructor(
    private readonly studentService: StudentService
  ) {}

  @Get('/')
  @ApiOkResponse({
    type: respStudentAllOK
  })
  @ApiOperation({
    summary: 'Get all student'
  })
  async allStudents(@Res() res: Response, @Query() query: paramAllStudentDTO) {
    let resp: Object[] = []

    const data = await this.studentService.getAllStudent(query)

    data.forEach(el => {
      resp.push(el)
    });

    res.status(200).send({
      message: "Succesfully get all data",
      data: data
    })
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    required: true,
    type: Number
  })
  @ApiOperation({
    summary: 'Get student by ID'
  })
  @ApiResponse({
    status: 200,
    type: respStudentByIdOK
  })
  async studentByID(@Res() res: Response, @Param() param) {
    let data = await this.studentService.getStudentById(param.id)

    res.status(200).send({
      message: `Successfully get student data for id : ${param.id}`,
      data: data.dataValues
    })
  }

  @Post('/')
  @ApiOkResponse({
    type: respAddStudentOK
  })
  @ApiOperation({
    summary: 'Add student'
  })
  async addStudent(@Body() body: addStudentDTO, @Res() res: Response) {
    let resp = await this.studentService.addStudent(body)

    res.status(200).send({
      message: 'Succesfullt add student'
    })
  }

  @Delete('/')
  @ApiOkResponse({
    type: respDeleteStudentOK
  })
  @ApiOperation({
    summary: 'Delete student'
  })
  async deleteStudent(@Body() body: deleteStudentDTO, @Res() res: Response) {
    let resp = await this.studentService.deleteStudent(body.id)

    if (resp) {
      res.status(200).send({
        message: `Succesfully delete data student for id ${resp}`,
        status_code: 200
      })
    }
  }

  @Put('/')
  @ApiOperation({
    summary: 'Update student'
  })
  async updateStudent(@Body() body: paramUpdateStudentDTO, @Res() res: Response) {
    let _ = await this.studentService.updateStudent(body)

    res.status(200).send({
      message: 'Succesfully update the data'
    })
  }
}