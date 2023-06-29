import {Inject, Injectable} from '@nestjs/common';
import {ClientGrpc} from "@nestjs/microservices";
import {Observable} from "rxjs";
import {CheckPasswordRequest, CheckPasswordResponse, FindUserByIdRequest, FindUserByResponse} from "./users.proto.typs";

export interface AuthService {
    FindUserById(data: FindUserByIdRequest): Observable<FindUserByResponse>
    CheckPassword(data: CheckPasswordRequest): Observable<CheckPasswordResponse>
    Testing (FindUserByIdRequest) : FindUserByIdRequest
}

@Injectable()
export class AuthService {

    private authService : AuthService;
    constructor(@Inject('AUTH_SERVICE') private authClient: ClientGrpc) {}

    onModuleInit() {
        this.authService = this.authClient.getService<AuthService>('AuthService');
    }
    findUserById(data: FindUserByIdRequest): Observable<FindUserByResponse> {
        console.log('FindUserByIdRequest', data);
        const foundUser =  this.authService.findUserById(data);
        console.log('foundUser', foundUser);
        return foundUser;
    }
    checkPassword(data: CheckPasswordRequest): Observable<CheckPasswordResponse> {
        console.log('call checkPassword in service' , data);
        const checkedPassword = this.authService.checkPassword(data);
        console.log('checkedPassword', checkedPassword);
        return checkedPassword;
    }
    testing(data: FindUserByIdRequest): FindUserByIdRequest {
        console.log('call Testing in service' , data);
        const tested = this.authService.testing(data);
        console.log('tested', tested);
        return tested;
    }

}
