import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ZodValidationPipe} from "nestjs-zod";
import {z} from "nestjs-zod/z";
import {Observable} from "rxjs";
import {CreatedUserDto, CreateUserDto} from "./users.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly appService: UsersService) {}
    @Get(':uuid')
    findOne(@Param("uuid", new ZodValidationPipe(z.string().uuid())) uuid: string): Observable<CreatedUserDto> {
        const foundUser = this.appService.findUserById({id: uuid});
        console.log('foundUser', foundUser);
        return foundUser;
    }
    @Post()
    createUser(@Body() body: CreateUserDto): Observable<CreatedUserDto> {
        return  this.appService.createUser(body);
    }
}
