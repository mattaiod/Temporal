import {Inject, Injectable, OnModuleInit} from '@nestjs/common';
import {CreateUserDto, FindUserByDto} from './users/users.dto';
import {ClientGrpc} from "@nestjs/microservices";
import {Observable} from "rxjs";

export interface UsersService {
  findUserById(data: FindUserByDto): Observable<any>
  createUser(data: CreateUserDto): Observable<any>
}

@Injectable()
export class AppService implements OnModuleInit{
  private usersService : UsersService;
  constructor(@Inject('user-service') private usersClient: ClientGrpc) {}


  onModuleInit() {
    console.log('client', this.usersClient.getService('UsersService')) ;
    this.usersService = this.usersClient.getService<UsersService>('UsersService');
  }
  findUserById(data: FindUserByDto): Observable<any> {
    console.log('call findUserById');
    return this.usersService.findUserById(data);
  }
  createUser(data: CreateUserDto): Observable<any> {
    console.log('call findUserById');
    return this.usersService.createUser(data);
  }
}
