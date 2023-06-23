import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {Logger} from "nestjs-pino";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule, {
        transport: Transport.TCP,
          options: {
              host: '0.0.0.0'
          }
      }
  );
  app.useLogger(app.get(Logger));
  await app.listen();
}
bootstrap();


