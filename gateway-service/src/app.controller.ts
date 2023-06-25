import {Body, Controller, Get, Inject, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ClientProxy} from "@nestjs/microservices";
import {Observable} from "rxjs";
import {CreatedUserDto, CreateUserDto} from "./users/users.dto";
import {ZodValidationPipe} from "nestjs-zod";
import {z} from "nestjs-zod/z";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
    @Get("users/:uuid")
    findOne(@Param("uuid", new ZodValidationPipe(z.string().uuid())) uuid: string): Observable<CreatedUserDto> {
        const foundUser = this.appService.findUserById({id: uuid});
        console.log('foundUser', foundUser);
        return foundUser;
}
  // @Get('users')
  // getUser(): Observable<string> {
  //     console.log('getUser');
  //     return this.appService.findUserById({id: '593233e2-b299-4796-a71a-c0e0834bf3fe'});
  // }
  @Post('users')
  createUser(@Body() body: CreateUserDto): Observable<CreatedUserDto> {
      return  this.appService.createUser(body);
  }
}
