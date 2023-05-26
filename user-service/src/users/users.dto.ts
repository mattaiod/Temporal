import { z } from 'nestjs-zod/z'
import { createZodDto } from "nestjs-zod"
import {Role} from "@prisma/client";
export const CreateUserSchema = z.object({
    first_name: z.string().min(2).max(64),
    last_name: z.string().min(2).max(64),
    email: z.string().email(),
    password: z.password().min(6).max(64).atLeastOne("digit"),
    role: z.nativeEnum(Role).optional()
})
    //.passthrough()

export const FindUserSchema = z.object({
    email: z.string().email()

})

export const FindUserByIdSchema = z.object({
    id: z.string().uuid()
})
export const UpdateUserSchema = z.object({
    first_name: z.string().min(2).max(64).optional(),
    last_name: z.string().min(2).max(64).optional(),
    email: z.string().email(),
    password: z.password().min(6).max(64).atLeastOne("digit").optional()
})
export class CreateUserDto extends createZodDto(CreateUserSchema.omit({role: true}).strict()) {}
export class FindUserByDto extends createZodDto(CreateUserSchema.pick({email: true}).partial().merge(z.object({id: z.string().uuid()}).partial())) {}
// export class FindUserByIdDto extends createZodDto(FindUserByIdSchema) {}

// export type CreateUserDto = z.infer<typeof CreateUserSchema>