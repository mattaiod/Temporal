import { CreateUserSchema, UpdateUserSchema } from "./users.dto";
import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";
// service UsersService {
//   rpc FindUserById (FindUserById) returns (User) {}
//   rpc CreateUser (CreateUser) returns (User) {}
// }

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
export enum CheckPasswordStatus {
  OK = 0,
  WRONG_PASSWORD = 1,
  NOT_FOUND = 2,
  INTERNAL = 3,
  UNRECOGNIZED = -1,
}

export class FindUserByIdRequest extends createZodDto(
  z.object({ id: z.string().uuid() })
) {}
export class FindUserByEmailRequest extends createZodDto(
  CreateUserSchema.pick({ email: true })
) {}
export class FindUserByResponse extends createZodDto(
  z.object({
    user: z.optional(
      CreateUserSchema.merge(z.object({ id: z.string().uuid() }))
    ),
  })
) {}
export class User extends createZodDto(
  CreateUserSchema.merge(
    z.object({
      id: z.string().uuid(),
    })
  )
) {}
export class CreateUserRequest extends createZodDto(
  CreateUserSchema.omit({ role: true })
) {}
export class CheckPasswordRequest extends createZodDto(
  CreateUserSchema.pick({ email: true, password: true })
) {}
export class CheckPasswordResponse extends createZodDto(
  z.object({
    status: z.nativeEnum(CheckPasswordStatus),
    user: z.optional(
      CreateUserSchema.merge(z.object({ id: z.string().uuid() }))
    ),
  })
) {}
