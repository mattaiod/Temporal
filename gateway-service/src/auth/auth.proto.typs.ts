import { createZodDto } from "nestjs-zod";
import { CreateAccessTokenSchema } from "./auth.dto";
import { z } from "nestjs-zod/z";

export enum AccessTokenResponseStatus {
  OK = 0,
  WRONG = 1,
}

export class AccessTokenRequest extends createZodDto(CreateAccessTokenSchema) {}

export class AccessTokenResponse extends createZodDto(
  z.object({
    status: z.nativeEnum(AccessTokenResponseStatus),
    userUuid: z.string().optional(),
  })
) {}
