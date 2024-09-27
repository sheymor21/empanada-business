import {Injectable} from '@nestjs/common';
import {CreateEmpanadaDto} from './dto/create-empanada.dto';
import {UpdateEmpanadaDto} from './dto/update-empanada.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Empanada} from "./entities/empanada.entity";
import {Repository} from "typeorm";

@Injectable()
export class EmpanadasService {
    constructor(
        @InjectRepository(Empanada)
        private readonly empanadasRepository: Repository<Empanada>
    ) {

    }

    async create(createEmpanadaDto: CreateEmpanadaDto) {
        let empanada = this.empanadasRepository.create(createEmpanadaDto);
        return this.empanadasRepository.save(empanada);
    }

    async findAll() {
        return this.empanadasRepository.find();
    }

    async findOne(id: string) {
        return this.empanadasRepository.findBy({id});
    }

    async update(id: string, updateEmpanadaDto: UpdateEmpanadaDto) {
        return this.empanadasRepository.update(id, updateEmpanadaDto);
    }

    async remove(id: string) {
        return this.empanadasRepository.softDelete({id});
    }
}
