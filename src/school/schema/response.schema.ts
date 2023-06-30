import { ApiProperty } from "@nestjs/swagger";

class respAddSchoolOK {
    @ApiProperty({
        example: "Successfuly add school for SMKN 2 Depok"
    })
    readonly message: string
    
    @ApiProperty({
        example: 200
    })
    readonly status_code: number
}

class respDeleteSchoolOK {
    @ApiProperty({
        example: "Successfuly delete school for id 2"
    })
    readonly message: string
}

class respPutSchoolOK {
    @ApiProperty({
        example: "Successfuly update school for id 2"
    })
    readonly message: string
}

export {
    respAddSchoolOK,
    respDeleteSchoolOK,
    respPutSchoolOK
}