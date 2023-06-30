import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Class } from '../class/class.entity';
import { School } from 'src/school/school.entity';

@Table({
  tableName: 'student',
  initialAutoIncrement: '1'
})
export class Student extends Model {

  @Column({
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataType.TINYINT,
  })
  id: number

  @Column({
    type: DataType.STRING
  })
  name: string

  @Column({
    type: DataType.INTEGER
  })
  nis: number

  @Column({
    type: DataType.TINYINT
  })
  age: number

  @Column({
    type: DataType.CHAR
  })
  address: string

  @ForeignKey(() => School)
  @Column({
    type: DataType.TINYINT,
    onDelete: 'CASCADE'
  })
  school_id: number

  @ForeignKey(() => Class)
  @Column({
    type: DataType.TINYINT,
    onDelete: 'CASCADE'
  })
  class_id: number

  @BelongsTo(() => Class)
  class: Class

  @BelongsTo(() => School)
  school: School
}