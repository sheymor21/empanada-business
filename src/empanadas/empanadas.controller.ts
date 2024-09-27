import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import {EmpanadasService} from './empanadas.service';
import {CreateEmpanadaDto} from './dto/create-empanada.dto';
import {UpdateEmpanadaDto} from './dto/update-empanada.dto';
import {Response} from "express";
import {empanadasToDtos} from "./mappers/empanada-to-dto.mapper";

@Controller('empanadas')
export class EmpanadasController {
    constructor(private readonly empanadasService: EmpanadasService) {
    }

    @Post()
    async create(@Res() res: Response, @Body() createEmpanadaDto: CreateEmpanadaDto) {
        return this.empanadasService.create(createEmpanadaDto).then(() => {
            return res.status(HttpStatus.CREATED).send({});
        }).catch(() => {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({});
        });
    }

    @Get()
    async findAll(@Res() res: Response) {
        return this.empanadasService.findAll().then(empanadas => {
            return res.status(HttpStatus.OK).send(empanadasToDtos(empanadas));
        });
    }

    @Get(':id')
    async findOne(@Res() res: Response, @Param('id') id: string) {
        return this.empanadasService.findOne(id).then((empanadas) => {
            if (empanadas.length != 0) {
                return res.status(HttpStatus.OK).send(empanadasToDtos(empanadas))
            }
            return res.status(HttpStatus.NOT_FOUND).send({});
        });
    }

    @Patch(':id')
    async update(@Res() res: Response, @Param('id') id: string, @Body() updateEmpanadaDto: UpdateEmpanadaDto) {
        return this.empanadasService.update(id, updateEmpanadaDto).then((result) => {
            if (result.affected != 0) {
                return res.status(HttpStatus.OK).send({});
            }
            return res.status(HttpStatus.NOT_FOUND).send({});
        });
    }

    @Delete(':id')
    async remove(@Res() res: Response, @Param('id') id: string) {
        return this.empanadasService.remove(id).then((result) => {
            if (result.affected != 0) {
                return res.status(HttpStatus.OK).send({});
            }
            return res.status(HttpStatus.NOT_FOUND).send({});
        });
    }
}
