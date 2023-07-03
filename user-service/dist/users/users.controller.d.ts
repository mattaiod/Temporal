import { UsersService } from "./users.service";
import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { CheckPasswordRequest, CreateUserRequest, FindUserByEmailRequest, FindUserByIdRequest, FindUserByResponse } from "./users.proto.typs";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findUserById(data: FindUserByIdRequest, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<FindUserByResponse>;
    findUserByEmail(data: FindUserByEmailRequest, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}) | null>;
    checkPassword(data: CheckPasswordRequest, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<{
        status: import("./users.proto.typs").CheckPasswordStatus;
        user?: {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            id: string;
            role?: "User" | "Admin" | undefined;
        } | undefined;
    }>;
    createUser(data: CreateUserRequest, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<import("@prisma/client/runtime").GetResult<{
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
