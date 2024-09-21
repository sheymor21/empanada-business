import { Injectable } from '@nestjs/common';
import { CreateEmpanadaDto } from './dto/create-empanada.dto';
import { UpdateEmpanadaDto } from './dto/update-empanada.dto';

@Injectable()
export class EmpanadasService {
  create(createEmpanadaDto: CreateEmpanadaDto) {
    return 'This action adds a new empanada';
  }

  findAll() {
    return `This action returns all empanadas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empanada`;
  }

  update(id: number, updateEmpanadaDto: UpdateEmpanadaDto) {
    return `This action updates a #${id} empanada`;
  }

  remove(id: number) {
    return `This action removes a #${id} empanada`;
  }
}
