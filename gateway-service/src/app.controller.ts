import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ClientProxy} from "@nestjs/microservices";
import {Observable} from "rxjs";

@Controller()
export class AppController {
  constructor(
      @Inject('USER_SERVICE') private readonly gatewayClient: ClientProxy,
      private readonly appService: AppService,
  ) {}

  // async onApplicationBootstrap() {
  //   await this.gatewayClient.connect();
  // }

  @Get('users')
  call(): Observable<string> {
    return this.appService.getUserById();
  }
  @Get('users2')
  get Hello(): string {
    return  'Hello World!';
  }
  

}
