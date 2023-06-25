import { z } from "zod"

export const RefreshTokenSchema = z.object({
    refreshToken: z.string(),
    createdAt: z.date(),
    userId: z.string(),
    deviceIp: z.string().ip(),
    blacklisted: z.boolean().default(false)
})