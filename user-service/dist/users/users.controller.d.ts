import { UsersService } from "./users.service";
import { CreateUserDto, FindUserByIdDto } from "./users.dto";
import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findUserById(data: FindUserByIdDto, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}) | null>;
    createUser(data: CreateUserDto, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
