import {Injectable} from '@nestjs/common';
import {PrismaClient} from "@prisma/client";
import {CreateUserDto, FindUserByDto} from "./users.dto";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaClient) {
    }

    async findAll() {
        return this.prisma.user.findMany()
    }

    async findBy(body: FindUserByDto) {
        return this.prisma.user.findUnique({
            where: {
                id: body.id
            }
        })
    }

    delete(body: FindUserByDto){
        if (body.id) {
            return this.prisma.user.delete({
                where: {
                    id: body.id
                }
            })
        }
    }
    async createUser(body: CreateUserDto) {
        return this.prisma.user.create({
            data: body
        });
    }
}
