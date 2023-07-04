import { Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'mail',
    initialAutoIncrement: '1'
})
export class Mail extends Model{
}