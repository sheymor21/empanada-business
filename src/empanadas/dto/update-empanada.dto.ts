import {IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateEmpanadaDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    price: number;
}
