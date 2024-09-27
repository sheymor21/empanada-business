import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateEmpanadaDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}
