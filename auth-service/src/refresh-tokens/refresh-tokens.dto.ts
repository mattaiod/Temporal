import {RefreshTokenSchema} from "./RefreshTokenSchema";
import {createZodDto} from "nestjs-zod";

export class CreateRefreshTokenDto extends createZodDto(RefreshTokenSchema.pick({userId: true, deviceIp: true})) {}
export class UpdateRefreshTokenDto extends createZodDto(RefreshTokenSchema.pick({refreshToken: true}).merge(RefreshTokenSchema.pick({blacklisted: true}).partial())) {}