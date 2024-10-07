import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import {OrderService} from './order.service';
import {CreateOrderDto} from './dto/create-order.dto';
import {UpdateOrderDto} from './dto/update-order.dto';
import {Response} from "express";

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {
    }

    @Post()
    async create(@Res() res: Response, @Body() createOrderDto: CreateOrderDto) {
        try {

            await this.orderService.create(createOrderDto);
            return res.status(HttpStatus.CREATED).send({});
        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).send({})
        }
    }

    @Get()
    async findAll(@Res() res: Response) {
        const getOrderDtos = await this.orderService.findAll();
        if (getOrderDtos.length === 0) return res.status(HttpStatus.NOT_FOUND).send({});
        return res.status(HttpStatus.OK).send(getOrderDtos);

    }

    @Get(':id')
    async findOne(@Res() res: Response, @Param('id') id: string) {
        const getOrderDto = await this.orderService.findOne(id);
        if (getOrderDto == null) return res.status(HttpStatus.NOT_FOUND).send({});
        return res.status(HttpStatus.OK).send(getOrderDto);
    }

    @Patch(':id')
    async update(@Res() res: Response, @Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        const result = await this.orderService.update(id, updateOrderDto);
        if (result == null) return res.status(HttpStatus.NOT_FOUND).send({});
        return res.status(HttpStatus.OK).send({});

    }

    @Delete(':id')
    async remove(@Res() res: Response, @Param('id') id: string) {
        const result = await this.orderService.remove(id);
        if (result == null) return res.status(HttpStatus.NOT_FOUND).send({});
        return res.status(HttpStatus.OK).send({});
    }
}
