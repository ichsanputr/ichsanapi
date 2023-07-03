import { Controller, Res, Get, Body, Post, Delete, Param, Query, Put, UseGuards } from "@nestjs/common";
import { ApiOkResponse, ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { ClassService } from "./class.service";
import { Response } from "express"
import { respClassAllOK, paramDeleteClassDTO } from "./schema/response.schema";
import { AuthGuard } from "src/auth/auth.guard";
import { 
  addClassDTO,
  paramClassUpdateDTO,
  paramClassByIdDTO
} from "./dto/class.dto";

@Controller('class')
@ApiTags('Class')
@ApiBearerAuth('jwtToken')
export class ClassController {
  constructor(private readonly classService: ClassService){}

  @Get('/')
  @ApiOperation({
    summary: 'Get all class'
  })
  async AllClass(@Res() res: Response){
    const data = await this.classService.getAllClass()

    res.status(200).send({
        message: "Successfully get all class",
        data: data
    })
  }

  @Post('/')
  @ApiOkResponse({
    type: respClassAllOK
  })
  @ApiOperation({
    summary: 'Add class'
  })
  async AddClass(@Res() res: Response, @Body() body: addClassDTO){
    let resp = await this.classService.addClass(body)

    if (resp){
        res.status(200).send({
            message: `Succesfully add class for ${resp.dataValues.class_name}`,
        })
    }
  }

  @Delete('/')
  @ApiOperation({
    summary: 'Delete class'
  })
  async DeleteClass(@Res() res: Response, @Query() query: paramDeleteClassDTO){
    let resp = await this.classService.deleteClass(query.id)

    if (resp){
        res.status(200).send({
            message: `Succesfully delete class for ${resp}`,
        })
    }
  }

  @Get('/student/:id')
  @ApiOperation({
    summary: 'Get class and its student'
  })
  async GetClassById(@Res() res: Response, @Param() param: paramClassByIdDTO){
    let resp = await this.classService.getClassById(param.id)

    if (resp){
        res.status(200).send({
            message: `Succesfully get class for id ${resp.dataValues.id}`,
            data: resp.dataValues
        })
    }
  }

  @Put('/')
  @ApiOperation({
    summary: 'Update class'
  })
  async UpdateClass(@Res() res: Response, @Body() body: paramClassUpdateDTO){
    let resp = await this.classService.updateClass(body)

    if (resp){
        res.status(200).send({
            message: `Succesfully get class for id ${resp}`
        })
    }
  }
}