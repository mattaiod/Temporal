import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ZodValidationPipe} from "nestjs-zod";
import {z} from "nestjs-zod/z";
import {Observable} from "rxjs";
import {CreateUserRequest, FindUserByResponse, User} from "./users.proto.typs";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':uuid')
    findOne(@Param("uuid", new ZodValidationPipe(z.string().uuid())) uuid: string): Observable<FindUserByResponse> {
        const foundUser = this.usersService.findUserById({id: uuid});
        console.log('foundUser', foundUser);
        return foundUser;
    }
    @Post()
    createUser(@Body() body: CreateUserRequest): Observable<User> {
        console.log("body: ", body);
        return  this.usersService.createUser(body);
    }
}
