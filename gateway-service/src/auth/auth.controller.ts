import {Body, Controller, Post, Ip, UseInterceptors} from '@nestjs/common';
import {ZodValidationPipe} from "nestjs-zod";
import {Observable, firstValueFrom} from "rxjs";
import {AuthService} from "./auth.service";
import {LoginRequest, LoginResponse} from "./users.proto.typs";
import {AuthInterceptor} from "./auth.interceptor";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @UseInterceptors(AuthInterceptor)
    async login(@Body(new ZodValidationPipe(LoginRequest)) data): Promise<LoginResponse> {
        console.log('call login', data);
        const temp = this.authService.login(data);
        const res = await firstValueFrom(temp);
        console.log('res', res);
        return res;
    }
}
