import {Injectable} from '@nestjs/common';
import {PrismaClient} from "@prisma/client";
import {CreateUserDto, FindUserByDto} from "./users.dto";
import * as argon2 from "argon2";
import {password} from "nestjs-zod/z";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaClient) {
    }

    async findAll() {
        return this.prisma.user.findMany()
    }
    // findAll(email: Pick<CreateUserDto, "email">) {
    //     if (email) {
    //         return {email};
    //     }
    //     return this.prisma.user.findMany();
    // }
    async findBy(body: FindUserByDto) {
        // if (body.email) {
        //     return this.prisma.user.findUnique({
        //         where: {
        //             email: body.email
        //         }
        //     });
        // }
        // if (body.id) {
            return this.prisma.user.findUnique({
                where: {
                    id: body.id
                }
            })
        // }
    }

    delete(body: FindUserByDto){
        if (body.email) {
            return this.prisma.user.delete({
                where: {
                    email: body.email
                }
            });
        }
        if (body.id) {
            return this.prisma.user.delete({
                where: {
                    id: body.id
                }
            })
        }
    }
    findById(body: FindUserByDto) {
        return this.prisma.user.findUnique({
            where: {
                id: body.id
            }
        })
    }
    async createUser(body: CreateUserDto) {
        return this.prisma.user.create({
            data: body
        });
    }
}
