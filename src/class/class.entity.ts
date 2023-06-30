import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Student } from 'src/student/student.entity';

@Table({
  tableName: 'class',
  initialAutoIncrement: '1'
})
export class Class extends Model {

  @Column({
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataType.TINYINT
  })
  id: number

  @Column({
    type: DataType.STRING
  })
  class_name: string

  @HasMany(() => Student)
  student: Student[]
}