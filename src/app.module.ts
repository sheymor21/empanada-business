import { Module } from '@nestjs/common';
import { EmpanadasModule } from './empanadas/empanadas.module';

@Module({
  imports: [EmpanadasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
