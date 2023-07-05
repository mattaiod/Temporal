import { z } from 'nestjs-zod/z';
export declare enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
export declare const CreateUserSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        USER: "USER";
        ADMIN: "ADMIN";
    }>>;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: "USER" | "ADMIN" | undefined;
}, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: "USER" | "ADMIN" | undefined;
}>;
export declare const UpdateUserSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodPassword>;
}, "strip", z.ZodTypeAny, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}>;
