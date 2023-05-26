import { UsersService } from "./users.service";
import { CreateUserDto, FindUserByDto } from "./users.dto";
import { User } from "@prisma/client";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<User[]>;
    createUser(body: CreateUserDto): Promise<User>;
    getUser(body: FindUserByDto): Promise<User | null | undefined>;
    deleteUser(body: FindUserByDto): Promise<User | undefined>;
}
