import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ZodValidationPipe } from "nestjs-zod";
import { z } from "nestjs-zod/z";
import { Observable } from "rxjs";
import {
  CreateUserRequest,
  FindUserByResponse,
  User,
} from "./users.proto.typs";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { AuthGuard } from "../auth/guards/auth.guard";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  @Get(":uuid")
  @UseGuards(AuthGuard)
  findOne(
    @Param("uuid", new ZodValidationPipe(z.string().uuid())) uuid: string
  ): Observable<FindUserByResponse> {
    const foundUser = this.usersService.findUserById({ id: uuid });
    console.log("foundUser", foundUser);
    return foundUser;
  }

  @Post("testing")
  generateTokenA() {
    return this.jwtService.sign(
      {
        userId: 1,
      },
      {
        secret: this.configService.get<string>(
          "ACCESS_TOKEN_AUTH_SERVICE_SECRET"
        ),
        expiresIn: 6000,
      }
    );
  }

  @Post()
  createUser(@Body() body: CreateUserRequest): Observable<User> {
    console.log("body: ", body);
    return this.usersService.createUser(body);
  }
}
