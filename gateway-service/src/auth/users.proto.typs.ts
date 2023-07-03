import {createZodDto} from "nestjs-zod";
import {CreateUserSchema} from "./users.dto";
import {z} from "nestjs-zod/z";

export enum CheckPasswordStatus {
    OK = 0,
    WRONG_PASSWORD = 1,
    NOT_FOUND = 2,
    INTERNAL = 3,
    UNRECOGNIZED = -1,
}

export class LoginRequest extends createZodDto(
    CreateUserSchema.pick({
        email: true, password: true})
        .merge(z.object({clientIp: z.string().ip()}))) {}
export class LoginResponse extends createZodDto(
    z.object({status: z.nativeEnum(CheckPasswordStatus)})
        .merge(z.object({
            accessToken: z.string().optional(),
            refreshToken: z.string().optional()
        }))) {}