import { Module } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'AUTH_SERVICE',
                transport: Transport.GRPC,
                options: {
                    package: 'users',
                    protoPath: join(__dirname, 'users.proto'),
                    url: "auth-service:3000"
                }
            },
        ]),
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
