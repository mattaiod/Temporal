import { PrismaClient } from "@prisma/client";
import { CreateUserDto, FindUserByDto } from "./users.dto";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findBy(body: FindUserByDto): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}) | null | undefined>;
    delete(body: FindUserByDto): import(".prisma/client").Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs> | undefined;
    findById(body: FindUserByDto): import(".prisma/client").Prisma.Prisma__UserClient<(import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}) | null, null, import("@prisma/client/runtime").DefaultArgs>;
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
}
