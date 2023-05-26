import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Header,
    Query,
    ParseIntPipe,
    BadRequestException,
    NotFoundException, ConflictException
} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto, FindUserByDto} from "./users.dto";
import {ZodValidationPipe} from "nestjs-zod"
import {User} from "@prisma/client";
import {UsersValidationPipe} from "./users.pipe";
import {NotFoundError} from "rxjs";
import * as argon2 from "argon2";




@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers() {
        return this.usersService.findAll()
    }
    // @Post()
    // getUserById(@Body(new ZodValidationPipe) body: FindUserByIdDto | FindUserDto ) {
    //     // if(body) {
    //     //         return this.usersService.findById(body);
    //     // }
    // };

    @Post('create')
    async createUser(@Body(new UsersValidationPipe) body: CreateUserDto){
        const {password,  ...data} = body;
        const hashed_password = await argon2.hash(password);
        try {
            return await this.usersService.createUser({password: hashed_password,  ...data});
        }catch (error) {
            throw new ConflictException();
        }
    }


    @Post('findby')
    async getUser(@Body(new UsersValidationPipe) body: FindUserByDto) {
        try {
            return await this.usersService.findBy(body);
        }catch (error){
            throw new NotFoundException();
        }
    };
    @Post('delete')
    async deleteUser(@Body(new UsersValidationPipe) body: FindUserByDto) {
        try {
            return await this.usersService.delete(body);
        }catch (error){
            throw new NotFoundException();
        }
    };

}
