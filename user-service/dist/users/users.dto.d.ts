import { z } from 'nestjs-zod/z';
export declare const CreateUserSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        User: "User";
        Admin: "Admin";
    }>>;
}, "strip", z.ZodTypeAny, {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: "User" | "Admin" | undefined;
}, {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: "User" | "Admin" | undefined;
}>;
export declare const FindUserSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const FindUserByIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const UpdateUserSchema: z.ZodObject<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodPassword>;
}, "strip", z.ZodTypeAny, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}>;
declare const CreateUserDto_base: import("nestjs-zod").ZodDto<{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}, z.ZodObjectDef<Omit<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        User: "User";
        Admin: "Admin";
    }>>;
}, "role">, "strict", z.ZodTypeAny>, {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}>;
export declare class CreateUserDto extends CreateUserDto_base {
}
declare const grpcCreateUserDto_base: import("nestjs-zod").ZodDto<{
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}, z.ZodObjectDef<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodPassword>;
}, "strip", z.ZodTypeAny>, {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}>;
export declare class grpcCreateUserDto extends grpcCreateUserDto_base {
}
declare const FindUserByIdDto_base: import("nestjs-zod").ZodDto<{
    id: string;
}, z.ZodObjectDef<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    id: string;
}>;
export declare class FindUserByIdDto extends FindUserByIdDto_base {
}
declare const FindUserByDto_base: import("nestjs-zod").ZodDto<{
    email?: string | undefined;
    id?: string | undefined;
}, z.ZodObjectDef<{
    email: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny>, {
    email?: string | undefined;
    id?: string | undefined;
}>;
export declare class FindUserByDto extends FindUserByDto_base {
}
export {};
