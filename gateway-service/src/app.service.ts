import {Inject, Injectable, OnModuleInit} from '@nestjs/common';
import {CreateUserDto} from './users/users.dto';
import {ClientGrpc} from "@nestjs/microservices";
import {Observable} from "rxjs";

@Injectable()
export class AppService implements OnModuleInit{
  private usersService: any;
  constructor(@Inject('USER_SERVICE') private usersClient: ClientGrpc) {}

  onModuleInit() {
    this.usersService = this.usersClient.getService<any>('UsersService');
  }

  getUserById(): Observable<string> {
    return this.usersService.findOne();
  }

}
