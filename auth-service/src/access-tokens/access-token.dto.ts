import {createZodDto} from "nestjs-zod";
import {AccessTokenSchema} from "./access-token.schema";
import {z} from 'nestjs-zod/z'


export enum TokenStatus {
    OK= 0,
    WRONG_PASSWORD = 1,
    NOT_FOUND = 2,
    INTERNAL = 3,
    EXPIRED = 4,
    UNRECOGNIZED = -1,
}
export class AccessTokenDto extends createZodDto(AccessTokenSchema){}

export class TokenResponse extends createZodDto(
    z.object({status : z.nativeEnum(TokenStatus), userUuid: z.string().optional()})
){}