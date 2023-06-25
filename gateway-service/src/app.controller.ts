import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ClientProxy} from "@nestjs/microservices";
import {Observable} from "rxjs";
import {CreateUserDto} from "./users/users.dto";

@Controller()
export class AppController {
  constructor(
  //     @Inject('USER_SERVICE') private readonly gatewayClient: ClientProxy,
      private readonly appService: AppService
  ) {}

  // async onApplicationBootstrap() {
  //   await this.gatewayClient.connect();
  // }

  @Get('users')
  getUser(): Observable<string> {
      console.log('getUser');
      return this.appService.findUserById({id: '593233e2-b299-4796-a71a-c0e0834bf3fe'});
  }
  @Post('users')
  createUser(@Body() body: CreateUserDto): Observable<CreateUserDto> {
      console.log('createUser');
      return  this.appService.createUser(body);
  }
}
