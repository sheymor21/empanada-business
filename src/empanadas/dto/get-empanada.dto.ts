import {Expose} from "class-transformer";

export class GetEmpanadaDto {
    @Expose()
    readonly id: string;
    @Expose()
    readonly name: string;
    @Expose()
    readonly price: number;
}