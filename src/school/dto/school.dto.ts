import { ApiProperty } from "@nestjs/swagger";
import { Express } from "express";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

class addCsvDTO{
    @ApiProperty({ type: 'string', format: 'binary', required: true })
    file: Express.Multer.File
}

class updateSchoolDTO{
    @IsNotEmpty()
    @ApiProperty({
        example: 2
    })
    id: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "SMKN 2 Depok"
    })
    school_name: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Jln Manis Renggo"
    })
    address: string
}

class paramSchoolById {
    @ApiProperty()
    @IsNotEmpty()
    id: number
}

class addSchoolDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "SMKN 2 Depok"
    })
    school_name: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Jln Manis Renggo"
    })
    address: string
}

class deleteSchoolDTO{
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        example: 2
    })
    id: number
}

export {
    deleteSchoolDTO,
    paramSchoolById,
    addCsvDTO,
    addSchoolDTO,
    updateSchoolDTO
}