import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

class addStudentDTO {
    @ApiProperty({
        example: "Muhammad Ichsan"
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string

    @ApiProperty({
        example: 19829
    })
    @IsNumber()
    @IsNotEmpty()
    readonly nis: number

    @ApiProperty({
        example: 18
    })
    @IsNumber()
    @IsNotEmpty()
    readonly age: number

    @ApiProperty({
        example: 'Jalan Demangan, Selomartani, Kalasan'
    })
    @IsString()
    @IsNotEmpty()
    readonly address: string

    @ApiProperty({
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    readonly school_id: number

    @ApiProperty({
        example: 3
    })
    @IsNumber()
    @IsNotEmpty()
    readonly class_id: number
}

class deleteStudentDTO {
    
    @ApiProperty({
        example: "23"
    })
    @IsNumber()
    @IsNotEmpty()
    readonly id: number
}

class paramAllStudentDTO{
    @IsOptional()
    @ApiProperty({
        required: false
    })
    school_id: number

    @IsOptional()
    @ApiProperty({
        required: false
    })
    class_id: number
}

class paramUpdateStudentDTO extends addStudentDTO {
    @ApiProperty({
        description: "Must be same as ID that you want edit",
        example: 1
    })
    @IsNotEmpty()
    readonly id: number
}

export {
    paramAllStudentDTO,
    paramUpdateStudentDTO,
    addStudentDTO,
    deleteStudentDTO
}