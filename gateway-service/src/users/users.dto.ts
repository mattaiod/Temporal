import { z } from 'nestjs-zod/z'
import { createZodDto } from "nestjs-zod"

export enum Role {
    USER = 'USER' ,
    ADMIN = 'ADMIN'
}
export const CreateUserSchema = z.object({
    firstName: z.string().min(2).max(64),
    lastName: z.string().min(2).max(64),
    email: z.string().email(),
    password: z.password().min(6).max(64).atLeastOne("digit"),
    role: z.nativeEnum(Role).optional()
})
//.passthrough()
export const UpdateUserSchema = z.object({
    firstName: z.string().min(2).max(64).optional(),
    lastName: z.string().min(2).max(64).optional(),
    email: z.string().email().optional(),
    password: z.password().min(6).max(64).atLeastOne("digit").optional()
})