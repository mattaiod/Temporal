import { PrismaClient } from "@prisma/client";
import { CheckPasswordRequest, CreateUserRequest, FindUserByEmailRequest, FindUserByIdRequest, CheckPasswordStatus } from "./users.proto.typs";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findUserById(body: FindUserByIdRequest): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}) | null>;
    findUserByEmail(body: FindUserByEmailRequest): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}) | null>;
    delete(body: FindUserByIdRequest): import(".prisma/client").Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    checkPassword(body: CheckPasswordRequest): Promise<{
        status: CheckPasswordStatus;
        user?: {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            id: string;
            role?: "USER" | "ADMIN" | undefined;
        } | undefined;
    }>;
    createUser(body: CreateUserRequest): Promise<import("@prisma/client/runtime").GetResult<{
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
