import { z } from "nestjs-zod/z"

export const AccessTokenSchema = z.object({
    accessToken: z.string(),
    clientIp: z.string().ip()
})