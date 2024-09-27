import {Module} from '@nestjs/common';
import {EmpanadasService} from './empanadas.service';
import {EmpanadasController} from './empanadas.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Empanada} from "./entities/empanada.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Empanada])],
    controllers: [EmpanadasController],
    providers: [EmpanadasService],
})
export class EmpanadasModule {
}
