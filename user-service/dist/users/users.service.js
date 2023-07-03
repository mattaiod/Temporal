"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const argon2 = require("argon2");
const users_proto_typs_1 = require("./users.proto.typs");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.user.findMany();
    }
    async findUserById(body) {
        return this.prisma.user.findUnique({
            where: {
                id: body.id
            }
        });
    }
    async findUserByEmail(body) {
        return this.prisma.user.findUnique({
            where: {
                email: body.email
            }
        });
    }
    delete(body) {
        return this.prisma.user.delete({
            where: {
                id: body.id
            }
        });
    }
    async checkPassword(body) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: body.email
            }
        });
        if (!user) {
            return users_proto_typs_1.CheckPasswordResponse.create({
                status: users_proto_typs_1.CheckPasswordStatus.NOT_FOUND,
                undefined
            });
        }
        if (await argon2.verify(user.password, body.password)) {
            const { password } = user, rest = __rest(user, ["password"]);
            return users_proto_typs_1.CheckPasswordResponse.create({
                status: users_proto_typs_1.CheckPasswordStatus.OK,
                user: Object.assign({ password: body.password }, rest)
            });
        }
        return users_proto_typs_1.CheckPasswordResponse.create({
            status: users_proto_typs_1.CheckPasswordStatus.WRONG_PASSWORD,
            undefined
        });
        console.log("user: ", user);
    }
    async createUser(body) {
        return this.prisma.user.create({
            data: body
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map