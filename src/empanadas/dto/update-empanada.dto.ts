import {IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateEmpanadaDto {

    @IsString()
    @IsOptional()
    readonly name: string;

    @IsNumber()
    @IsOptional()
    readonly price: number;
}
