import { ApiProperty } from "@nestjs/swagger";

class respAddStudentOK {
    @ApiProperty({
        example: "Successfuly add data for name Muhammad Ichsan"
    })
    readonly message: string

    @ApiProperty({
        example: 200
    })
    readonly status_code: number
}

class respStudentAllOK {
    @ApiProperty({
        example: "Successfuly get the data"
    })
    readonly message: string

    @ApiProperty({
        example: 200
    })
    readonly status_code: number

    @ApiProperty({
        example: {
            name: "ichsan"
        }
    })
    readonly data: object[]
}

class respStudentByIdOK {
    @ApiProperty({
        example: "Successfuly get data from id 2"
    })
    readonly message: string

    @ApiProperty({
        example: {
            id: 2,
            name: "Muhammad Ichsan",
            nis: 19890,
            age: 18,
            address: "Jln Mawar, Kalasan, Sleman",
            school_id: 2,
            class_id: 4
        }
    })
    readonly data: Object

    @ApiProperty({
        example: 200
    })
    readonly status_code: number
}

class respDeleteStudentOK {
    @ApiProperty({
        example: "Successfuly delete data student for id 23"
    })
    readonly message: string

    @ApiProperty({
        example: 200
    })
    readonly status_code: number
}

export {
    respAddStudentOK,
    respDeleteStudentOK,
    respStudentAllOK,
    respStudentByIdOK
}