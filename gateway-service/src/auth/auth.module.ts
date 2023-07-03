import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import { JwtModule } from "@nestjs/jwt";
import { JwtTestStrategy } from "./strategy/jwt.strategy";
import { ConfigModule } from "@nestjs/config";
import { AuthMiddleware } from "./middlewares/auth.middleware";
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: "AUTH_SERVICE",
        transport: Transport.GRPC,
        options: {
          package: "auth",
          protoPath: join(__dirname, "./auth.proto"),
          url: "auth-service:3000",
        },
      },
    ]),
    JwtModule,
  ],
  providers: [AuthService, JwtTestStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("users");
  }
}
