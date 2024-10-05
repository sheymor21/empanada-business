import {Column, Entity, ManyToOne} from "typeorm";
import {Order} from "./order.entity";
import {Empanada} from "../../empanadas/entities/empanada.entity";

@Entity({name: "order_empanada"})
export class OrderEmpanadas {

    @Column({primary: true, generated: "uuid"})
    id: string

    @ManyToOne(() => Order, (order) => order.orderEmpanadas, {
        eager: true,
        cascade: ["insert"]
    })
    order: Order;

    @ManyToOne(() => Empanada, (empanada) => empanada.orderEmpanada, {
        eager: true,
    })
    empanada: Empanada;

    @Column()
    quantity: number;
}