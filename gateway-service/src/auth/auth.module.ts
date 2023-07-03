import { Module } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";
import { readFile } from 'fs';
// readFile(__dirname.concat('/users.proto'), 'utf-8', (err, data) => {
//     if (err) {
//         console.log('err', err);
//     }
//     console.log('data', data);
// })
@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'AUTH_SERVICE',
                transport: Transport.GRPC,
                options: {
                    package: 'auth',
                    protoPath: join(__dirname, './auth.proto'),
                    url: "auth-service:3000"
                }
            },
        ]),
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
