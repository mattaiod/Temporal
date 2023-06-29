import {Controller, Get, Ip, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {GrpcMethod} from "@nestjs/microservices";
import {CheckPasswordRequest, FindUserByIdRequest} from "./users/users.proto.typs";
import {UsersService} from "./users/users.service";
import {Metadata, ServerUnaryCall} from "@grpc/grpc-js";

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService,) {}
  @GrpcMethod('UsersService', 'FindUserById')
  async findUserById(data: FindUserByIdRequest, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    const foundUser = await this.usersService.findUserById(data);
    console.log("foundUser auth: ", foundUser);
    return foundUser;
  }

  @GrpcMethod('UsersService', 'CheckPassword')
    async checkPassword(data: CheckPasswordRequest, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        const checkedPassword = await this.usersService.checkPassword(data);
        console.log("foundUser CheckPassword : ", checkedPassword);
        return checkedPassword;
    }
    @GrpcMethod('UsersService', 'Testing')
    async testing(data: FindUserByIdRequest, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        const checkedPassword = data;
        console.log("foundUser CheckPassword : ", checkedPassword);
        return checkedPassword;
    }
}
