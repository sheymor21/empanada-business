import {Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn} from "typeorm";

@Entity()
export class Empanada {

    @Column({primary: true, generated: "uuid"})
    id: string;

    @Column()
    name: string;

    @Column("double", {precision: 5, scale: 2, default: 0.0})
    price: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date

    @DeleteDateColumn()
    deleteAt: Date;
}
