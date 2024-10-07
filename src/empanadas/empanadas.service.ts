import {Injectable} from '@nestjs/common';
import {CreateEmpanadaDto} from './dto/create-empanada.dto';
import {UpdateEmpanadaDto} from './dto/update-empanada.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Empanada} from "./entities/empanada.entity";
import {Repository} from "typeorm";
import {plainToInstance} from "class-transformer";
import {GetEmpanadaDto} from "./dto/get-empanada.dto";

@Injectable()
export class EmpanadasService {
    constructor(
        @InjectRepository(Empanada)
        private readonly empanadasRepository: Repository<Empanada>
    ) {

    }

    async create(createEmpanadaDto: CreateEmpanadaDto) {
        const empanada = this.empanadasRepository.create(createEmpanadaDto);
        return this.empanadasRepository.save(empanada);
    }

    async findAll() {
        const result = await this.empanadasRepository.find();
        return plainToInstance(GetEmpanadaDto, result, {strategy: 'excludeAll'})
    }

    async findOne(id: string) {
        const result = await this.empanadasRepository.findOneBy({id});
        return plainToInstance(GetEmpanadaDto, result, {strategy: 'excludeAll'});
    }

    async update(id: string, updateEmpanadaDto: UpdateEmpanadaDto) {
        return this.empanadasRepository.update(id, updateEmpanadaDto);
    }

    async remove(id: string) {
        return this.empanadasRepository.softDelete({id});
    }
}
