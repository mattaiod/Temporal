import { Inject, Injectable } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import {
  CreateUserRequest,
  FindUserByIdRequest,
  FindUserByResponse,
} from "./users.proto.typs";

export interface AuthService {
  VerifyAccessToken(): Observable<any>;
}

export interface UsersService {
  FindUserById(data: FindUserByIdRequest): Observable<FindUserByResponse>;
  CreateUser(data: CreateUserRequest): Observable<any>;
}

@Injectable()
export class UsersService {
  private usersService: UsersService;
  private authService: AuthService;
  constructor(@Inject("USER_SERVICE") private usersClient: ClientGrpc) {}
  onModuleInit() {
    this.usersService =
      this.usersClient.getService<UsersService>("UsersService");
  }
  findUserById(data: FindUserByIdRequest): Observable<FindUserByResponse> {
    console.log("call findUserById");
    // const accessTokenIsOk = this.authService.VerifyAccessToken()
    const foundUser = this.usersService.findUserById(data);
    console.log("foundUser", foundUser);
    return foundUser;
  }
  createUser(data: CreateUserRequest): Observable<any> {
    console.log("call findUserById");
    return this.usersService.createUser(data);
  }
}
