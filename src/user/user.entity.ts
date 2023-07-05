import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'user'
})
export class User extends Model{
    @Column({
        type: DataType.TINYINT,
        primaryKey: true,
        autoIncrement: false,
        unique: true
    })
    id: number

    @Column({
        type: DataType.CHAR
    })
    username: string

    @Column({
        type: DataType.CHAR
    })
    password: string
}