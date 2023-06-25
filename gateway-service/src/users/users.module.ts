import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";

@Module({
    imports: [ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'users',
          protoPath: join(__dirname, './users.proto'),
          url: "user-service:3000"
        }
      },
    ]),],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
