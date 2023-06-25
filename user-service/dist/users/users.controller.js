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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_dto_1 = require("./users.dto");
const argon2 = require("argon2");
const microservices_1 = require("@nestjs/microservices");
const grpc_js_1 = require("@grpc/grpc-js");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    findUserById(data, metadata, call) {
        console.log("data: ", data);
        return this.usersService.findBy(data);
    }
    async createUser(data, metadata, call) {
        console.log("data: ", data);
        const { password } = data, rest = __rest(data, ["password"]);
        const hashed_password = await argon2.hash(password);
        try {
            const newUser = await this.usersService.createUser(Object.assign({ password: hashed_password }, rest));
            console.log("newUser: ", newUser);
            return newUser;
        }
        catch (error) {
            throw new common_1.ConflictException();
        }
    }
};
__decorate([
    (0, microservices_1.GrpcMethod)('UsersService', 'FindUserById'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.FindUserByIdDto, grpc_js_1.Metadata, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findUserById", null);
__decorate([
    (0, microservices_1.GrpcMethod)('UsersService', 'CreateUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.CreateUserDto, grpc_js_1.Metadata, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map