import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class loginDTO{
    @IsNotEmpty()
    @ApiProperty({
        example: 'ichsan'
    })
    username: string

    @IsNotEmpty()
    @ApiProperty({
        example: 'qwerty123'
    })
    password: string
}