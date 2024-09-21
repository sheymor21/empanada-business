import { Module } from '@nestjs/common';
import { EmpanadasService } from './empanadas.service';
import { EmpanadasController } from './empanadas.controller';

@Module({
  controllers: [EmpanadasController],
  providers: [EmpanadasService],
})
export class EmpanadasModule {}
