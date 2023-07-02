import { z } from "nestjs-zod/z"

export const RefreshTokenSchema = z.object({
    refreshToken: z.string(),
    createdAt: z.date(),
    userId: z.string().uuid(),
    deviceIp: z.string().ip(),
    blacklisted: z.boolean().default(false).optional()
})