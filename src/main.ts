import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as process from "node:process";

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api/v1");
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }))

    let port: (string | number);
    if (process.env.APP_PORT != null && process.env.APP_PORT != "") {
        port = process.env.APP_PORT;
    } else {
        port = 8080
    }
    await app.listen(port);
}

bootstrap();
