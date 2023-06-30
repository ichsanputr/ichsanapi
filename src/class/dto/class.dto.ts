import { IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

class addClassDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        example: "9D"
    })
    class_name: string
}

class paramClassByIdDTO {
    @IsNotEmpty()
    @ApiProperty()
    id: number
}

class paramClassUpdateDTO {
    @IsNotEmpty()
    @ApiProperty({
        description: "Must be same to id school that want to edited",
        example: 2
    })
    id: number

    @IsNotEmpty()
    @ApiProperty({
        example: "10A"
    })
    class_name: string
}

export {
    addClassDTO,
    paramClassByIdDTO,
    paramClassUpdateDTO
}