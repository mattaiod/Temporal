"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPasswordResponse = exports.CheckPasswordRequest = exports.CreateUserRequest = exports.User = exports.FindUserByResponse = exports.FindUserByEmailRequest = exports.FindUserByIdRequest = exports.CheckPasswordStatus = exports.Role = void 0;
const users_dto_1 = require("./users.dto");
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
var CheckPasswordStatus;
(function (CheckPasswordStatus) {
    CheckPasswordStatus[CheckPasswordStatus["OK"] = 0] = "OK";
    CheckPasswordStatus[CheckPasswordStatus["WRONG_PASSWORD"] = 1] = "WRONG_PASSWORD";
    CheckPasswordStatus[CheckPasswordStatus["NOT_FOUND"] = 2] = "NOT_FOUND";
    CheckPasswordStatus[CheckPasswordStatus["INTERNAL"] = 3] = "INTERNAL";
    CheckPasswordStatus[CheckPasswordStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckPasswordStatus = exports.CheckPasswordStatus || (exports.CheckPasswordStatus = {}));
class FindUserByIdRequest extends (0, nestjs_zod_1.createZodDto)(z_1.z.object({ id: z_1.z.string().uuid() })) {
}
exports.FindUserByIdRequest = FindUserByIdRequest;
class FindUserByEmailRequest extends (0, nestjs_zod_1.createZodDto)(users_dto_1.CreateUserSchema.pick({ email: true })) {
}
exports.FindUserByEmailRequest = FindUserByEmailRequest;
class FindUserByResponse extends (0, nestjs_zod_1.createZodDto)(z_1.z.object({ user: z_1.z.optional(users_dto_1.CreateUserSchema.merge(z_1.z.object({ id: z_1.z.string().uuid() }))) })) {
}
exports.FindUserByResponse = FindUserByResponse;
class User extends (0, nestjs_zod_1.createZodDto)(users_dto_1.CreateUserSchema.merge(z_1.z.object({
    id: z_1.z.string().uuid(),
}))) {
}
exports.User = User;
class CreateUserRequest extends (0, nestjs_zod_1.createZodDto)(users_dto_1.CreateUserSchema.omit({ role: true })) {
}
exports.CreateUserRequest = CreateUserRequest;
class CheckPasswordRequest extends (0, nestjs_zod_1.createZodDto)(users_dto_1.CreateUserSchema.pick({ email: true, password: true })) {
}
exports.CheckPasswordRequest = CheckPasswordRequest;
class CheckPasswordResponse extends (0, nestjs_zod_1.createZodDto)(z_1.z.object({
    status: z_1.z.nativeEnum(CheckPasswordStatus),
    user: z_1.z.optional(users_dto_1.CreateUserSchema.merge(z_1.z.object({ id: z_1.z.string().uuid() }))),
})) {
}
exports.CheckPasswordResponse = CheckPasswordResponse;
//# sourceMappingURL=users.proto.typs.js.map