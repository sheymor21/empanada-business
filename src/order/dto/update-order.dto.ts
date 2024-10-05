import {IsArray, IsOptional, IsString} from "class-validator";
import {EmpanadaIds} from "./create-order.dto";

export class UpdateOrderDto {

    @IsString()
    @IsOptional()
    readonly customerName: string;

    @IsArray()
    @IsOptional()
    readonly empanadas: EmpanadaIds[];
}
