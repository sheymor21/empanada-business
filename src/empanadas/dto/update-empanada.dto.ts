import {PartialType} from '@nestjs/mapped-types';
import {CreateEmpanadaDto} from './create-empanada.dto';
import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateEmpanadaDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    price: number;
}
