import { PrismaClient } from "@prisma/client";
import { CreateUserDto, FindUserByDto } from "./users.dto";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<import(".prisma/client").User[]>;
    findBy(body: FindUserByDto): Promise<import(".prisma/client").User | null | undefined>;
    delete(body: FindUserByDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never> | undefined;
    findById(body: FindUserByDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User | null, null>;
    createUser(body: CreateUserDto): Promise<import(".prisma/client").User>;
}
