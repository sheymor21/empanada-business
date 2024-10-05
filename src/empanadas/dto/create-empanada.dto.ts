import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateEmpanadaDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
}
