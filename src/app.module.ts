import {Module} from '@nestjs/common';
import {EmpanadasModule} from './empanadas/empanadas.module';
import {OrderModule} from './order/order.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "node:process";
import * as dotenv from 'dotenv'
dotenv.config()

export type DbConfig = {
    username: string;
    password: string;
    databaseName: string;
    port: number;
}

const config: DbConfig = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    databaseName: process.env.DB_NAME || "test",
    port: Number(process.env.DB_PORT) || 3306
}

@Module({
    imports: [EmpanadasModule, OrderModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.databaseName,
        synchronize: true,
        autoLoadEntities: true
    })],
    controllers: [],
    providers: [],
})
export class AppModule {
}
