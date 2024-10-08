import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    UpdateDateColumn
} from "typeorm";
import {OrderEmpanadas} from "../../order/entities/order-empanadas.entity";

@Entity()
export class Empanada {

    @Column({primary: true, generated: "uuid"})
    id: string;

    @Column()
    name: string;

    @Column("double", {precision: 5, scale: 2, default: 0.0})
    price: number;

    @OneToMany(() => OrderEmpanadas, (orderEmpanada) => orderEmpanada.empanada,
        {
            cascade: ["insert"]
        })
    orderEmpanada: OrderEmpanadas[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date

    @DeleteDateColumn()
    deleteAt: Date;
}
