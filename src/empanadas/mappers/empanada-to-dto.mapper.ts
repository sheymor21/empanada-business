import {Empanada} from "../entities/empanada.entity";
import {GetEmpanadaDto} from "../dto/get-empanada.dto";
import {GetOrderEmpanadas} from "../../order/dto/get-order-empanada.dto";
import {countBy} from 'lodash'

export function empanadaToDto(empanada: Empanada): GetEmpanadaDto {
    return {
        id: empanada.id,
        name: empanada.name,
        price: empanada.price
    };
}

export function empanadasToDtos(empanada: Empanada[]): GetEmpanadaDto[] {
    const getEmpanadaDtos: GetEmpanadaDto[] = []
    empanada.map((value) => {
            const dto: GetEmpanadaDto = {
                id: value.id,
                name: value.name,
                price: value.price
            }
            getEmpanadaDtos.push(dto);
        }
    )
    return getEmpanadaDtos;
}

export function orderEmpanadasToDtos(empanada: Empanada[]): GetOrderEmpanadas[] {
    const getEmpanadaDtos: GetOrderEmpanadas[] = []
    let count = countBy(empanada, 'id')
    empanada.map((value) => {
            const dto: GetOrderEmpanadas = {
                name: value.name,
                price: value.price,
                quantity: count[value.id]
            }
            getEmpanadaDtos.push(dto);
        }
    )
    return getEmpanadaDtos;
}
