import {Inject, Injectable} from '@nestjs/common';
import {ClientGrpc} from "@nestjs/microservices";
import {CreatedUserDto, CreateUserDto, FindUserByDto} from "./users.dto";
import {Observable} from "rxjs";

export interface UsersService {
    findUserById(data: FindUserByDto): Observable<any>
    createUser(data: CreateUserDto): Observable<any>
}

@Injectable()
export class UsersService {

    private usersService : UsersService;
    constructor(@Inject('USER_SERVICE') private usersClient: ClientGrpc) {}


    onModuleInit() {
        this.usersService = this.usersClient.getService<UsersService>('UsersService');
    }
    findUserById(data: FindUserByDto): Observable<CreatedUserDto> {
        console.log('call findUserById');
        return this.usersService.findUserById(data);
    }
    createUser(data: CreateUserDto): Observable<any> {
        console.log('call findUserById');
        return this.usersService.createUser(data);
    }
}
