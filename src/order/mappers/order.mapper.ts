import {GetOrderDto} from "../dto/get-order.dto";
import {GetOrderEmpanadas} from "../dto/get-order-empanada.dto";
import {Order} from "../entities/order.entity";

export function orderToGetOrderDto(object: Order): GetOrderDto;

export function orderToGetOrderDto(object: Order[]): GetOrderDto[] ;

export function orderToGetOrderDto(object: Order[] | Order): GetOrderDto[] | GetOrderDto {
    if (Array.isArray(object)) {
        return listGetOrderDto(object);
    } else {
        return singleGetOrderDto(object);
    }
}

function singleGetOrderDto(order: Order): GetOrderDto {
    return {
        id: order.id,
        customerName: order.customerName,
        totalPrice: order.totalPrice,
        empanadas: order.orderEmpanadas.map(orderEmpanadas => {
            return new GetOrderEmpanadas(
                orderEmpanadas.empanada.name,
                orderEmpanadas.empanada.price,
                orderEmpanadas.quantity,
            )
        })
    }
}

function listGetOrderDto(orders: Order[]): GetOrderDto[] {

    return orders.map(order => {
        const orderDto: GetOrderDto = {
            id: order.id,
            customerName: order.customerName,
            totalPrice: order.totalPrice,
            empanadas: order.orderEmpanadas.map(orderEmpanadas => {
                return new GetOrderEmpanadas(
                    orderEmpanadas.empanada.name,
                    orderEmpanadas.empanada.price,
                    orderEmpanadas.quantity,
                )
            })
        }
        return orderDto
    });
}
