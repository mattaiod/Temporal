"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = exports.CreateUserSchema = exports.Role = void 0;
const z_1 = require("nestjs-zod/z");
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
exports.CreateUserSchema = z_1.z.object({
    firstName: z_1.z.string().min(2).max(64),
    lastName: z_1.z.string().min(2).max(64),
    email: z_1.z.string().email(),
    password: z_1.z.password().min(6).max(64).atLeastOne("digit"),
    role: z_1.z.nativeEnum(Role).optional()
});
exports.UpdateUserSchema = z_1.z.object({
    firstName: z_1.z.string().min(2).max(64).optional(),
    lastName: z_1.z.string().min(2).max(64).optional(),
    email: z_1.z.string().email().optional(),
    password: z_1.z.password().min(6).max(64).atLeastOne("digit").optional()
});
//# sourceMappingURL=users.dto.js.map