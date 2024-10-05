import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    UpdateDateColumn
} from "typeorm";
import {OrderEmpanadas} from "./order-empanadas.entity";

@Entity()
export class Order {
    @Column({primary: true, generated: "uuid"})
    id: string;

    @Column()
    customerName: string;

    @Column("double")
    totalPrice: number;

    @OneToMany(() => OrderEmpanadas, (orderEmpanadas) => orderEmpanadas.order,
        {
            cascade: ["insert"]
        })
    orderEmpanadas: OrderEmpanadas[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    UpdateAt: Date;

    @DeleteDateColumn()
    DeleteAt: Date;
}
