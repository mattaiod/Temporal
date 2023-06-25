import {
    Controller,ConflictException
} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto, FindUserByIdDto} from "./users.dto";
import * as argon2 from "argon2";
import {GrpcMethod} from '@nestjs/microservices';
import {Metadata, ServerUnaryCall} from "@grpc/grpc-js";

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {
}



    @GrpcMethod('UsersService', 'FindUserById')
    findUserById(data: FindUserByIdDto , metadata: Metadata, call: ServerUnaryCall<any, any>) {
        console.log("data: ", data);
        return this.usersService.findBy(data);
    }
    @GrpcMethod('UsersService', 'CreateUser')
    async createUser(data: CreateUserDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        console.log("data: ", data);

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


    // @Delete ('delete')
    // async deleteUser(@Body(new UsersValidationPipe) body: FindUserByDto) {
    //     try {
    //         return await this.usersService.delete(body);
    //     }catch (error){
    //         throw new NotFoundException();
    //     }
    // };

}
