import {Controller, UseInterceptors} from '@nestjs/common';
import {UsersService} from "./users/users.service";
import {GrpcMethod} from "@nestjs/microservices";
import {CheckPasswordResponse, CheckPasswordStatus, FindUserByIdRequest} from "./users/users.proto.typs";
import {Metadata, ServerUnaryCall} from "@grpc/grpc-js";
import {LoginRequest} from "./app.proto.types";
import {firstValueFrom} from "rxjs";
import {RefreshTokensService} from "./refresh-tokens/refresh-tokens.service";
import {JwtService} from "@nestjs/jwt";
import {ZodGuard, ZodValidationPipe} from "nestjs-zod";
import {AppInterceptor} from "./app.interceptor";

@Controller()
export class AppController {
    constructor(private readonly usersService: UsersService,
                private readonly refreshTokensService: RefreshTokensService,
                private readonly jwtService: JwtService
    ) {
    }

    @GrpcMethod('AuthService', 'FindUserById')
    async findUserById(data: FindUserByIdRequest, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        const foundUser = await this.usersService.findUserById(data);
        console.log("foundUser auth: ", foundUser);
        return foundUser;
    }

    @GrpcMethod('AuthService', 'Login')
    @UseInterceptors(AppInterceptor)
    async login(data: LoginRequest, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        const {clientIp, ...rest} = data;
        const checkedPassword  = this.usersService.checkPassword(rest);
        const checkedPasswordP = await firstValueFrom(checkedPassword);
        const status = checkedPasswordP?.status;
        const user = checkedPasswordP?.user;
        console.log("login: ", status);
        let accessToken: undefined | string
        let refreshToken: undefined | string
        switch (status) {
            case CheckPasswordStatus.OK:
                console.log("login: ", status);
                if (user) {
                    refreshToken = await this.refreshTokensService.createRefreshToken({
                        userId: user.id,
                        deviceIp: clientIp
                    });
                    accessToken = this.jwtService.sign({
                            userId: user.id,
                            deviceIp: data.clientIp,
                            role: user.role
                        },
                        {
                            secret: process.env.ACCESS_TOKEN_AUTH_SERVICE_SECRET,
                            expiresIn: process.env.ACCESS_TOKEN_AUTH_SERVICE_EXPIRES_IN
                        }
                    );
                    const res = {
                        status: status,
                        accessToken: accessToken,
                        refreshToken: refreshToken
                    }
                    return res
                }
                break;
            case CheckPasswordStatus.WRONG_PASSWORD:
                console.log("login: ", status);
                return {
                    status: status,
                    accessToken: accessToken,
                    refreshToken: refreshToken
                }
            case CheckPasswordStatus.NOT_FOUND:
                console.log("login: ", status);
                return {
                    status: status,
                    accessToken: accessToken,
                    refreshToken: refreshToken
                }
            case CheckPasswordStatus.INTERNAL:
                console.log("login: ", status);
                return {
                    status: status,
                    accessToken: accessToken,
                    refreshToken: refreshToken
                }
        }
        console.log("end : ", status);
        return status;
    }

    @GrpcMethod('AuthService', 'Testing')
    async testing(data: FindUserByIdRequest, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        const testingResponse = data;
        console.log("testingResponse : ", testingResponse);
        return testingResponse;
    }
}
