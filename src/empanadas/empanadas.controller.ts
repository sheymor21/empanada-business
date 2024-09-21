import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpanadasService } from './empanadas.service';
import { CreateEmpanadaDto } from './dto/create-empanada.dto';
import { UpdateEmpanadaDto } from './dto/update-empanada.dto';

@Controller('empanadas')
export class EmpanadasController {
  constructor(private readonly empanadasService: EmpanadasService) {}

  @Post()
  create(@Body() createEmpanadaDto: CreateEmpanadaDto) {
    return this.empanadasService.create(createEmpanadaDto);
  }

  @Get()
  findAll() {
    return this.empanadasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empanadasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpanadaDto: UpdateEmpanadaDto) {
    return this.empanadasService.update(+id, updateEmpanadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empanadasService.remove(+id);
  }
}
