import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";
import {JwtService} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";
import {AuthService} from "../auth/auth.service";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        ClientsModule.register([
          {
            name: 'USER_SERVICE',
            transport: Transport.GRPC,
            options: {
              package: 'users',
              protoPath: join(__dirname, 'users.proto'),
              url: "user-service:3000"
            }
          },
        ])
    ],
  providers: [UsersService, JwtService],
  controllers: [UsersController]
})
export class UsersModule {}
