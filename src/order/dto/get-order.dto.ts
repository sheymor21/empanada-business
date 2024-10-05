import {GetOrderEmpanadas} from "./get-order-empanada.dto";

export class GetOrderDto {
    readonly id: string;
    readonly customerName: string;
    readonly totalPrice: number;
    readonly empanadas: GetOrderEmpanadas[]
}
