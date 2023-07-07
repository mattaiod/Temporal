import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "nestjs-pino";
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new UsersValidationPipe)
  app.useLogger(app.get(Logger))
  await app.listen(process.env.GATEWAY_SERVICE_APP_PORT || 3000);
}
bootstrap();
