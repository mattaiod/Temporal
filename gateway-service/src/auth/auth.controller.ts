import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ZodValidationPipe} from "nestjs-zod";
import {z} from "nestjs-zod/z";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {CheckPasswordRequest, CheckPasswordResponse, FindUserByIdRequest, FindUserByResponse} from "./users.proto.typs";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Get('check-password/:uuid')
    findOne(@Param("uuid", new ZodValidationPipe(z.string().uuid())) uuid: string): Observable<FindUserByResponse> {
        console.log('foundUser', uuid);
        const foundUser = this.authService.findUserById({id: uuid});
        console.log('foundUser', foundUser);
        // console.log('foundUser', foundUser.forEach((user) => console.log(user)));
        return foundUser;
    }
    @Post('login')
    checkPassword(@Body(new ZodValidationPipe(CheckPasswordRequest) )data: CheckPasswordRequest): Observable<CheckPasswordResponse> {
        console.log('call login', data);
        return this.authService.checkPassword(data);
    }
    @Post('test')
    testing(@Body(new ZodValidationPipe(FindUserByIdRequest) )data: FindUserByIdRequest): FindUserByIdRequest {
        console.log('call test', data);
        return this.authService.testing(data)
    }
}
