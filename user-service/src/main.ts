import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {UsersValidationPipe} from "./users/users.pipe";
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from 'nestjs-pino';
import {join} from 'path'
import * as process from "process";

console.log("env ", process.env.USER_SERVICE_APP_URL, process.env.USER_SERVICE_APP_PORT);
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
          transport: Transport.GRPC,
          options: {
              package: 'users',
              protoPath: join(__dirname.concat('/users/users.proto')),
              url: `${process.env.USER_SERVICE_APP_URL}:${process.env.USER_SERVICE_APP_PORT}`,
          }
      }
  );

  app.useGlobalPipes(new UsersValidationPipe());
  app.useLogger(app.get(Logger));
  await app.listen();
}

bootstrap();
