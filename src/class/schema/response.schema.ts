import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

class ClassResponseSchema{

}

class respClassAllOK extends ClassResponseSchema{
    @ApiProperty()
    message: string

    @ApiProperty({
        type: Array<Object>,
        example: [
            {id: 1,class_name: "9D"},
            {id: 1, class_name: "2B"}
        ]
    })
    data: Object[]

    @ApiProperty()
    status: number

    @ApiProperty()
    total_data: number
}

class paramDeleteClassDTO{
    @ApiProperty({
        example: 2,
        required: true
    })
    @IsNotEmpty()
    id: number
}

export {
    respClassAllOK,
    paramDeleteClassDTO
}