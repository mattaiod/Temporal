"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByDto = exports.FindUserByIdDto = exports.CreatedUserDto = exports.grpcCreateUserDto = exports.CreateUserDto = exports.UpdateUserSchema = exports.CreateUserSchema = void 0;
const z_1 = require("nestjs-zod/z");
const nestjs_zod_1 = require("nestjs-zod");
const client_1 = require("@prisma/client");
exports.CreateUserSchema = z_1.z.object({
    firstName: z_1.z.string().min(2).max(64),
    lastName: z_1.z.string().min(2).max(64),
    email: z_1.z.string().email(),
    password: z_1.z.password().min(6).max(64).atLeastOne("digit"),
    role: z_1.z.nativeEnum(client_1.Role).optional()
});
exports.UpdateUserSchema = z_1.z.object({
    firstName: z_1.z.string().min(2).max(64).optional(),
    lastName: z_1.z.string().min(2).max(64).optional(),
    email: z_1.z.string().email().optional(),
    password: z_1.z.password().min(6).max(64).atLeastOne("digit").optional()
});
class CreateUserDto extends (0, nestjs_zod_1.createZodDto)(exports.CreateUserSchema.omit({ role: true }).strict()) {
}
exports.CreateUserDto = CreateUserDto;
class grpcCreateUserDto extends (0, nestjs_zod_1.createZodDto)(exports.UpdateUserSchema) {
}
exports.grpcCreateUserDto = grpcCreateUserDto;
class CreatedUserDto extends (0, nestjs_zod_1.createZodDto)(exports.CreateUserSchema.merge(z_1.z.object({ id: z_1.z.string().uuid(), createdAt: z_1.z.date(), updatedAt: z_1.z.date() }))) {
}
exports.CreatedUserDto = CreatedUserDto;
class FindUserByIdDto extends (0, nestjs_zod_1.createZodDto)(z_1.z.object({ id: z_1.z.string().uuid() })) {
}
exports.FindUserByIdDto = FindUserByIdDto;
class FindUserByDto extends (0, nestjs_zod_1.createZodDto)(exports.CreateUserSchema.pick({ email: true }).partial().merge(z_1.z.object({ id: z_1.z.string().uuid() }).partial())) {
}
exports.FindUserByDto = FindUserByDto;
//# sourceMappingURL=users.dto.js.map