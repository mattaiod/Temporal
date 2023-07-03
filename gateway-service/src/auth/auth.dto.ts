import { z } from "nestjs-zod/z";
export const CreateAccessTokenSchema = z.object({
  accessToken: z.string(),
  clientIp: z.string().ip(),
});
