"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByDto = exports.CreateUserDto = exports.UpdateUserSchema = exports.FindUserByIdSchema = exports.FindUserSchema = exports.CreateUserSchema = void 0;
const z_1 = require("nestjs-zod/z");
const nestjs_zod_1 = require("nestjs-zod");
const client_1 = require("@prisma/client");
exports.CreateUserSchema = z_1.z.object({
    first_name: z_1.z.string().min(2).max(64),
    last_name: z_1.z.string().min(2).max(64),
    email: z_1.z.string().email(),
    password: z_1.z.password().min(6).max(64).atLeastOne("digit"),
    role: z_1.z.nativeEnum(client_1.Role).optional()
});
exports.FindUserSchema = z_1.z.object({
    email: z_1.z.string().email()
});
exports.FindUserByIdSchema = z_1.z.object({
    id: z_1.z.string().uuid()
});
exports.UpdateUserSchema = z_1.z.object({
    first_name: z_1.z.string().min(2).max(64).optional(),
    last_name: z_1.z.string().min(2).max(64).optional(),
    email: z_1.z.string().email(),
    password: z_1.z.password().min(6).max(64).atLeastOne("digit").optional()
});
class CreateUserDto extends (0, nestjs_zod_1.createZodDto)(exports.CreateUserSchema.omit({ role: true }).strict()) {
}
exports.CreateUserDto = CreateUserDto;
class FindUserByDto extends (0, nestjs_zod_1.createZodDto)(exports.CreateUserSchema.pick({ email: true }).partial().merge(z_1.z.object({ id: z_1.z.string().uuid() }).partial())) {
}
exports.FindUserByDto = FindUserByDto;
//# sourceMappingURL=users.dto.js.map