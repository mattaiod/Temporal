import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";
import { UsersService } from './users.service';

@Module({
    imports: [
        ClientsModule.register([
        {
            name: 'USER_SERVICE',
            transport: Transport.GRPC,
            options: {
                package: 'users',
                protoPath: join(__dirname, 'users.proto'),
                url: "user-service:3000"
            }
        }
    ])],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}
