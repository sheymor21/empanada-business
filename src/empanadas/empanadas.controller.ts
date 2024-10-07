import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import {EmpanadasService} from './empanadas.service';
import {CreateEmpanadaDto} from './dto/create-empanada.dto';
import {UpdateEmpanadaDto} from './dto/update-empanada.dto';
import {Response} from "express";

@Controller('empanadas')
export class EmpanadasController {
    constructor(private readonly empanadasService: EmpanadasService) {
    }

    @Post()
    async create(@Res() res: Response, @Body() createEmpanadaDto: CreateEmpanadaDto) {
        try {
            await this.empanadasService.create(createEmpanadaDto);
            return res.status(HttpStatus.CREATED).send({});
        } catch (e) {
            return res.status(HttpStatus.BAD_REQUEST).send(e);
        }
    }

    @Get()
    async findAll(@Res() res: Response) {
        const result = await this.empanadasService.findAll()
        if (result.length === 0) return res.status(HttpStatus.NOT_FOUND).send({});
        return res.status(HttpStatus.OK).send(result);
    }

    @Get(':id')
    async findOne(@Res() res: Response, @Param('id') id: string) {
        const empanada = await this.empanadasService.findOne(id);
        if (empanada == null) {
            return res.status(HttpStatus.NOT_FOUND).send({});
        }
        return res.status(HttpStatus.OK).send(empanada);
    }

    @Patch(':id')
    async update(@Res() res: Response, @Param('id') id: string, @Body() updateEmpanadaDto: UpdateEmpanadaDto) {
        const result = await this.empanadasService.update(id, updateEmpanadaDto);
        if (result.affected != 0) return res.status(HttpStatus.OK).send({});
        return res.status(HttpStatus.NOT_FOUND).send({});

    }

    @Delete(':id')
    async remove(@Res() res: Response, @Param('id') id: string) {
        const result = await this.empanadasService.remove(id);
        if (result.affected != 0) return res.status(HttpStatus.OK).send({});
        return res.status(HttpStatus.NOT_FOUND).send({})
    }
}
