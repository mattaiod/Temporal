import { UsersService } from "./users.service";
import { CreateUserDto, FindUserByDto, FindUserByIdDto } from "./users.dto";
import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    createUser(body: CreateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findUserById(data: FindUserByIdDto, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}) | null | undefined>;
    deleteUser(body: FindUserByDto): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}) | undefined>;
}
