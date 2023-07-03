import { Injectable, Inject } from '@nestjs/common';
import { Student } from './student.entity';
import { paramAllStudentDTO, paramUpdateStudentDTO } from './dto/student.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY') private readonly studentRepository: typeof Student,
    private readonly mailerService: MailerService
  ) { }

  async getAllStudent(query: paramAllStudentDTO): Promise<Student[]> {
    if (query.school_id != null && query.class_id == null) {
      return await this.studentRepository.findAll<Student>({
        where: {
          school_id: query.school_id
        },
      });
    }

    if (query.school_id == null && query.class_id != null) {
      return await this.studentRepository.findAll<Student>({
        where: {
          class_id: query.class_id
        },
      });
    }

    if (query.school_id != null && query.class_id != null) {
      return await this.studentRepository.findAll<Student>({
        where: {
          class_id: query.class_id,
          school_id: query.school_id
        },
      });
    }

    return await this.studentRepository.findAll()
  }

  async getStudentById(id: number): Promise<Student> {
    return await this.studentRepository.findOne({
      where: {
        id: id
      }
    })
  }

  async addStudent(data): Promise<Student> {
    return await this.studentRepository.create(data)
  }

  async deleteStudent(id: number): Promise<Number> {
    return await this.studentRepository.destroy({
      where: {
        id: id
      }
    })
  }

  async updateStudent(data: paramUpdateStudentDTO): Promise<[affectedNumber: number]> {
    return await this.studentRepository.update(data, {
      where: {
        id: data.id
      }
    })
  }

  async sendStudentEmail() {
    let resp = await this.mailerService
      .sendMail({
        to: 'iniasya1@gmail.com', // list of receivers
        from: 'ichsanfadhil67@gmail.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome',
        template: './otp',
        context: {
          halo: "ichsan"
        }
      })
    
    console.log(resp)
  }
}