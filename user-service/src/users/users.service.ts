import {Injectable} from '@nestjs/common';
import {PrismaClient} from "@prisma/client";
import * as argon2 from "argon2";
import {
    CheckPasswordRequest,
    CheckPasswordResponse, CreateUserRequest,
    FindUserByEmailRequest,
    FindUserByIdRequest,
    CheckPasswordStatus
} from "./users.proto.typs";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaClient) {
    }

    async findAll() {
        return this.prisma.user.findMany()
    }

    async findUserById(body: FindUserByIdRequest) {
        return this.prisma.user.findUnique({
            where: {
                id: body.id
            }
        })
    }
    async findUserByEmail(body: FindUserByEmailRequest) {
        return this.prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
    }
    delete(body: FindUserByIdRequest){
        return this.prisma.user.delete({
            where: {
                id: body.id
            }
        })
    }
    async checkPassword(body: CheckPasswordRequest) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: body.email
            }
        });

        if (!user) {
            return CheckPasswordResponse.create({
                status: CheckPasswordStatus.NOT_FOUND,
                undefined
            });
        }
        if (await argon2.verify(user.password, body.password)) {
            const  { password, ...rest } = user ;
            return CheckPasswordResponse.create({
                status: CheckPasswordStatus.OK,
                user: { password: body.password, ...rest}
            });
        }
        return CheckPasswordResponse.create({
            status: CheckPasswordStatus.WRONG_PASSWORD,
            undefined
        });
        console.log("user: ", user);
    }
    async createUser(body: CreateUserRequest) {
        return this.prisma.user.create({
            data: body
        });
    }
}
