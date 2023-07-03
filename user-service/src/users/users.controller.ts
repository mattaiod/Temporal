import { Controller, ConflictException } from "@nestjs/common";
import { UsersService } from "./users.service";
import * as argon2 from "argon2";
import { GrpcMethod } from "@nestjs/microservices";
import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import {
  CheckPasswordRequest,
  CreateUserRequest,
  FindUserByEmailRequest,
  FindUserByIdRequest,
  FindUserByResponse,
} from "./users.proto.typs";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod("UsersService", "FindUserById")
  async findUserById(
    data: FindUserByIdRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ) {
    const foundUser = await this.usersService.findUserById(data);
    console.log("FindUserById foundUser: ", foundUser);
    if (!foundUser) {
      return { user: undefined };
    }
    console.log("foundUser: ", { user: foundUser });
    return { user: foundUser };
  }
  @GrpcMethod("UsersService", "FindUserByEmail")
  findUserByEmail(
    data: FindUserByEmailRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ) {
    console.log("data: ", data);
    return this.usersService.findUserByEmail(data);
  }
  @GrpcMethod("UsersService", "CheckPassword")
  checkPassword(
    data: CheckPasswordRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ) {
    console.log("data: ", data);
    return this.usersService.checkPassword(data);
  }
  @GrpcMethod("UsersService", "CreateUser")
  async createUser(
    data: CreateUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ) {
    console.log("data: ", data);

    const { password, ...rest } = data;
    const hashed_password = await argon2.hash(password);
    try {
      const newUser = await this.usersService.createUser({
        password: hashed_password,
        ...rest,
      });
      console.log("newUser: ", newUser);
      return newUser;
    } catch (error) {
      throw new ConflictException();
    }
  }

  // @Delete ('delete')
  // async deleteUser(@Body(new UsersValidationPipe) body: FindUserByDto) {
  //     try {
  //         return await this.usersService.delete(body);
  //     }catch (error){
  //         throw new NotFoundException();
  //     }
  // };
}
