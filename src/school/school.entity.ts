import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Student } from 'src/student/student.entity';

@Table({
  tableName: 'school',
  initialAutoIncrement: '1'
})
export class School extends Model {

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
  school_name: string

  @Column({
    type: DataType.CHAR
  })
  address: string

  @HasMany(() => Student)
  student: Student[]
}