import { Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'mail'
})
export class Mail extends Model{
}