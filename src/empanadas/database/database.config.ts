import {TypeOrmModule} from "@nestjs/typeorm";
import {DynamicModule} from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as process from "node:process";

dotenv.config();


export type DbConfig = {
    username: string;
    password: string;
    databaseName: string;
    port: number;
}

export class DatabaseProvider {

    static get(): DynamicModule {
        let config: DbConfig = {
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            databaseName: process.env.DB_NAME,
            port: Number(process.env.DB_PORT)
        }

        if (config.databaseName == "") {
            config.databaseName = "test"
        }
        if (config.port == 0) {
            config.port = 3306
        }

        return TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: config.port ? 3306 : config.port,
            username: config.username,
            password: config.password,
            database: config.databaseName ? "test" : config.databaseName,
            synchronize: true,
            autoLoadEntities: true
        })
    }
}