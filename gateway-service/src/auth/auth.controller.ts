import { Body, Controller, Post, Ip, UseInterceptors } from "@nestjs/common";
import { ZodValidationPipe } from "nestjs-zod";
import { Observable, firstValueFrom } from "rxjs";
import { AuthService } from "./auth.service";
import { LoginRequest, LoginResponse } from "./users.proto.typs";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { AccessTokenRequest, AccessTokenResponse } from "./auth.proto.typs";
import { IpInterceptor } from "./interceptors/ip.interceptor";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  @UseInterceptors(IpInterceptor)
  async login(
    @Body(new ZodValidationPipe(LoginRequest)) data
  ): Promise<LoginResponse> {
    console.log("call login", data);
    const temp = this.authService.login(data);
    const res = await firstValueFrom(temp);
    console.log("res", res);
    return res;
  }

  async verifyAccessToken(
    @Body() token: AccessTokenRequest
  ){
    console.log(token);
  }
}
