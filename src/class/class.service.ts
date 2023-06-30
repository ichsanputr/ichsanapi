import { Injectable, Inject } from '@nestjs/common';
import { Class } from './class.entity';
import { Student } from 'src/student/student.entity';
import { paramClassUpdateDTO } from './dto/class.dto';

@Injectable()
export class ClassService {
    constructor(@Inject('CLASS_REPOSITORY') private readonly classRepository: typeof Class){}

    async getAllClass(): Promise<Class[]>{
        return await this.classRepository.findAll()
    }

    async addClass(data){
        return await this.classRepository.create(data)
    }

    async deleteClass(id: number): Promise<number> {
        return await this.classRepository.destroy({
            where: {
                id: id
            }
        })
    }

    async getClassById(id: number): Promise<Class> {
        return await this.classRepository.findOne({
            include: [Student],
            where: {
                id: id
            }
        })
    }

    async updateClass(body: paramClassUpdateDTO): Promise<[affectedCount: number]>{
        return await this.classRepository.update(body, {
            where: {
                id: body.id
            }
        })
    }
}