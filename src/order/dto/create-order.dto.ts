import {IsArray, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateOrderDto {

    @IsString()
    @IsNotEmpty()
    readonly customerName: string;

    @IsArray()
    @IsNotEmpty()
    readonly empanadas: EmpanadaIds[];
}

export class EmpanadaIds {
    @IsString()
    @IsNotEmpty()
    empanadaId: string;
    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}
