import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { UsersValidationPipe } from "./users/users.pipe";
import { Logger } from "nestjs-pino";
import { join } from "path";
import { otelSDK } from "./tracing";

async function bootstrap() {
  otelSDK.start();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: "users",
        protoPath: join(__dirname.concat("/users/users.proto")),
        url: "0.0.0.0:3000",
      },
    }
  );

  app.useGlobalPipes(new UsersValidationPipe());
  app.useLogger(app.get(Logger));
  await app.listen();
}

bootstrap();
