import {Controller, Get, Ip, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() ip: string): string {
    return this.appService.getHello(ip);
  }
  createJWT(){}
}
