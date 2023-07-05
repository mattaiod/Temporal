import { Global, Inject, Injectable } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { LoginRequest, LoginResponse } from "./users.proto.typs";
import {
  AccessTokenRequest,
  AccessTokenResponse,
  AccessTokenResponseStatus,
} from "./auth.proto.typs";
export interface AuthService {
  // FindUserById(data: FindUserByIdRequest): Observable<FindUserByResponse>
  // CheckPassword(data: CheckPasswordRequest): Observable<CheckPasswordResponse>
  Login(data: LoginRequest): Observable<LoginResponse>;
  VerifyToken(response: AccessTokenRequest): Promise<AccessTokenResponse>;
}

@Global()
@Injectable()
export class AuthService {
  private authService: AuthService;
  private authResponseStatus: any;
  private userUuid: any;
  constructor(@Inject("AUTH_SERVICE") private authClient: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.authClient.getService<AuthService>("AuthService");
    console.log(this.authService);
  }
  // findUserById(data: FindUserByIdRequest): Observable<FindUserByResponse> {
  //     console.log('FindUserByIdRequest', data);
  //     const foundUser =  this.authService.findUserById(data);
  //     console.log('foundUser', foundUser);
  //     return foundUser;
  // }

  login(data: LoginRequest): Observable<LoginResponse> {
    console.log("call checkPassword in service", data);
    const checkedPassword = this.authService.login(data);
    console.log("checkedPassword", checkedPassword);
    return checkedPassword;
  }

  verifyAccessToken(
    token: AccessTokenRequest
  ): Observable<AccessTokenResponse> {
    console.log(`Service : ${token}`);
    return this.authService.verifyAccessToken(token);
  }
}
