import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

class paramRegisterDTO {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: 'lombanan@gmail.com'
    })
    email: string
}

class paramQuoteDTO{
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: 'lombanan@gmail.com'
    })
    email: string
}

export {
    paramRegisterDTO,
    paramQuoteDTO
}