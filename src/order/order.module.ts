import {Module} from '@nestjs/common';
import {OrderService} from './order.service';
import {OrderController} from './order.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "./entities/order.entity";
import {Empanada} from "../empanadas/entities/empanada.entity";
import {OrderEmpanadas} from "./entities/order-empanadas.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Order, Empanada,OrderEmpanadas])],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule {
}
