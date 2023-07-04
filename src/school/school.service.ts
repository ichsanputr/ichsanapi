import { Injectable, Inject } from '@nestjs/common';
import { School } from './school.entity';
import { Student } from 'src/student/student.entity';
import { CsvParser } from 'nest-csv-parser';
import { Readable } from 'stream';
import { MailerService } from '@nestjs-modules/mailer';
import {
  updateSchoolDTO
} from './dto/school.dto'
import { SESClient, VerifyEmailIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import

@Injectable()
export class SchoolService {
  constructor(
    @Inject('SCHOOL_REPOSITORY') private readonly schoolRepository: typeof School,
    private readonly csvParse: CsvParser,
    private readonly mailerService: MailerService
  ) { }

  async getAllSchool(): Promise<School[]> {
    return this.schoolRepository.findAll()
  }

  async addSchool(data): Promise<School> {
    return this.schoolRepository.create(data)
  }

  async deleteSchool(id: number): Promise<number> {
    return this.schoolRepository.destroy({
      where: {
        id: id
      }
    })
  }

  async updateSchool(data: updateSchoolDTO) {
    return this.schoolRepository.update(data, {
      where: {
        id: data.id
      }
    })
  }

  async getStudent(id: number): Promise<School> {
    return this.schoolRepository.findOne({
      include: [Student],
      where: {
        id: id
      }
    })
  }

  async addSchoolCSV(csv: Buffer): Promise<School[]> {
    const csvStream = Readable.from(csv)
    const parsedCsv = await this.csvParse.parse(csvStream, School)

    let data = []

    parsedCsv.list.forEach(el => {
      data.push({
        school_name: el.school,
        address: el.address
      })
    });

    let resp = await this.schoolRepository.bulkCreate(data, {
      fields: ["school_name", "address"],
      updateOnDuplicate: ["school_name"]
    })

    return resp
  }
}