import {Injectable} from '@nestjs/common';
import {CreateOrderDto, EmpanadaIds} from './dto/create-order.dto';
import {UpdateOrderDto} from './dto/update-order.dto';
import {In, Repository} from "typeorm";
import {Order} from "./entities/order.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Empanada} from "../empanadas/entities/empanada.entity";
import {GetOrderDto} from "./dto/get-order.dto";
import {OrderEmpanadas} from "./entities/order-empanadas.entity";
import {orderToGetOrderDto} from "./mappers/order.mapper";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(Empanada)
        private readonly empanadaRepository: Repository<Empanada>,
    ) {
    }

    async create(createOrderDto: CreateOrderDto) {
        const order = new Order();
        order.customerName = createOrderDto.customerName;

        const empanadaIds = createOrderDto.empanadas.map(empanadaId => empanadaId.empanadaId)
        const empanadas = await this.empanadaRepository.find({where: {id: In(empanadaIds)}});

        order.totalPrice = 0
        empanadas.map(item => {
            order.totalPrice += item.price * this.getEmpanadaQuantity(item.id, createOrderDto.empanadas)
        })

        order.orderEmpanadas = empanadas.map(empanada => {
            const orderEmpanada = new OrderEmpanadas();
            orderEmpanada.empanada = empanada;
            orderEmpanada.quantity = this.getEmpanadaQuantity(empanada.id, createOrderDto.empanadas);
            return orderEmpanada;
        });
        return await this.orderRepository.save(order);

    }

    async findAll() {
        const orders = await this.orderRepository.createQueryBuilder('order')
            .innerJoin('order.orderEmpanadas', 'orderEmpanadas', 'orderEmpanadas.empanada')
            .innerJoin('orderEmpanadas.empanada', 'empanada')
            .select(['order.id', 'order.customerName', 'order.totalPrice', 'orderEmpanadas.empanadaId', 'orderEmpanadas.quantity', 'empanada.name', 'empanada.price'])
            .getMany();

        return orderToGetOrderDto(orders)
    }

    async findOne(id: string): Promise<GetOrderDto> {

        const order = await this.orderRepository.createQueryBuilder('order')
            .innerJoin('order.orderEmpanadas', 'orderEmpanadas', 'orderEmpanadas.empanada')
            .innerJoin('orderEmpanadas.empanada', 'empanada')
            .where('order.id = :id', {id})
            .select(['order.id', 'order.customerName', 'order.totalPrice', 'orderEmpanadas.empanadaId', 'orderEmpanadas.quantity', 'empanada.name', 'empanada.price'])
            .getOne();


        return orderToGetOrderDto(order)
    }

    async update(id: string, updateOrderDto: UpdateOrderDto) {
        const order = await this.orderRepository.findOneBy({id})
        if (order == null) {
            return null
        }
        order.customerName = updateOrderDto.customerName

        const empanadaIds = updateOrderDto.empanadas.map(empanada => empanada.empanadaId)
        const empanadas = await this.empanadaRepository.findBy({id: In(empanadaIds)});
        order.orderEmpanadas = empanadas.map(empanada => {
            const orderEmpanada = new OrderEmpanadas();
            orderEmpanada.empanada = empanada;
            orderEmpanada.quantity = this.getEmpanadaQuantity(empanada.id, updateOrderDto.empanadas);
            return orderEmpanada;
        });
        order.totalPrice = 0;
        empanadas.map(item => order.totalPrice += item.price * this.getEmpanadaQuantity(item.id, updateOrderDto.empanadas));
        return await this.orderRepository.save(order);
    }

    async remove(id: string) {
        return this.orderRepository.softRemove({id})
    }

    private getEmpanadaQuantity(id: string, empanada: EmpanadaIds[]) {
        return empanada.find(empanada => empanada.empanadaId === id).quantity
    }
}
