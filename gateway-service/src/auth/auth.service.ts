import {Inject, Injectable} from '@nestjs/common';
import {ClientGrpc} from "@nestjs/microservices";
import {Observable} from "rxjs";
import {LoginRequest, LoginResponse} from "./users.proto.typs";
export interface AuthService {
    // FindUserById(data: FindUserByIdRequest): Observable<FindUserByResponse>
    // CheckPassword(data: CheckPasswordRequest): Observable<CheckPasswordResponse>
    Login (data: LoginRequest) : Observable<LoginResponse>
}

@Injectable()
export class AuthService {

    private authService : AuthService;
    constructor(@Inject('AUTH_SERVICE') private authClient: ClientGrpc) {}

    onModuleInit() {
        this.authService = this.authClient.getService<AuthService>('AuthService');
    }
    // findUserById(data: FindUserByIdRequest): Observable<FindUserByResponse> {
    //     console.log('FindUserByIdRequest', data);
    //     const foundUser =  this.authService.findUserById(data);
    //     console.log('foundUser', foundUser);
    //     return foundUser;
    // }
    login(data: LoginRequest): Observable<LoginResponse> {
        console.log('call checkPassword in service' , data);
        const checkedPassword = this.authService.login(data);
        console.log('checkedPassword', checkedPassword);
        return checkedPassword;
    }
}
