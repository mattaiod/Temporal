import { z } from 'nestjs-zod/z';
import { createZodDto } from "nestjs-zod";


enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
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
export class CreateUserDto extends createZodDto(CreateUserSchema.omit({role: true}).strict()) {}
export class CreatedUserDto extends createZodDto(CreateUserSchema.merge(z.object({id: z.string().uuid(), createdAt: z.date(), updatedAt: z.date()}))) {}

export class FindUserByIdDto extends createZodDto(z.object({id: z.string().uuid()})) {}
export class FindUserByDto extends createZodDto(CreateUserSchema.pick({email: true}).partial().merge(z.object({id: z.string().uuid()}).partial())) {}
// export class FindUserByIdDto extends createZodDto(FindUserByIdSchema) {}

// export type CreateUserDto = z.infer<typeof CreateUserSchema>