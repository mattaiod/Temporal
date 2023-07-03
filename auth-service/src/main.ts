import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {Logger} from "nestjs-pino";
import {join} from "path";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule, {
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname.concat('/app.proto')),
          url: '0.0.0.0:3000'
        }
      }
  );
  app.useLogger(app.get(Logger));
  await app.listen();
}
bootstrap();
