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
    NotFoundException, ConflictException, Inject
} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto, FindUserByDto, FindUserByIdDto, grpcCreateUserDto} from "./users.dto";
import {createZodDto, ZodValidationPipe} from "nestjs-zod"
import {User} from "@prisma/client";
import {UsersValidationPipe} from "./users.pipe";
import {NotFoundError} from "rxjs";
import * as argon2 from "argon2";
import {ClientProxy, EventPattern, GrpcMethod, MessagePattern} from '@nestjs/microservices';
import {Metadata, ServerUnaryCall} from "@grpc/grpc-js";
import {logCreator} from "@nestjs/microservices/external/kafka.interface";
// import {FindUserById} from "src/users/proto/users";




@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {
}


    // async getUsers() {
    //     const users = await this.usersService.findAll();
    //     console.log("users: ", users);
    //     return users;
    // }
    @GrpcMethod('UsersService', 'FindUserById')
    findUserById(data: FindUserByIdDto , metadata: Metadata, call: ServerUnaryCall<any, any>) {
        console.log("data: ", data);
        return this.usersService.findBy(data);
    }
    // @Post()
    // getUserById(@Body(new ZodValidationPipe) body: FindUserByIdDto | FindUserDto ) {
    //     // if(body) {
    //     //         return this.usersService.findById(body);
    //     // }
    // };

    // @Post('create')

    @GrpcMethod('UsersService', 'CreateUser')
    async createUser(data: CreateUserDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        console.log("data: $$$$ ", data);

        const {password, ...rest} = data;
        const hashed_password = await argon2.hash(password);
        try {
            const newUser = await this.usersService.createUser({password: hashed_password, ...rest});
            console.log("newUser: ", newUser);
            return newUser;
        } catch (error) {
            throw new ConflictException();
        }
    }


    // async findUserById(@Body(new UsersValidationPipe) body: FindUserByDto) {
    //     try {
    //         return await this.usersService.findBy(body);
    //     }catch (error){
    //         throw new NotFoundException();
    //     }
    // };
    // @Post('delete')
    // async deleteUser(@Body(new UsersValidationPipe) body: FindUserByDto) {
    //     try {
    //         return await this.usersService.delete(body);
    //     }catch (error){
    //         throw new NotFoundException();
    //     }
    // };

}
