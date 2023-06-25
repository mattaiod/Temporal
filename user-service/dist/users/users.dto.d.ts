import { z } from 'nestjs-zod/z';
export declare const CreateUserSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        User: "User";
        Admin: "Admin";
    }>>;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: "User" | "Admin" | undefined;
}, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: "User" | "Admin" | undefined;
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
declare const CreateUserDto_base: import("nestjs-zod").ZodDto<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}, z.ZodObjectDef<Omit<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        User: "User";
        Admin: "Admin";
    }>>;
}, "role">, "strict", z.ZodTypeAny>, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}>;
export declare class CreateUserDto extends CreateUserDto_base {
}
declare const grpcCreateUserDto_base: import("nestjs-zod").ZodDto<{
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}, z.ZodObjectDef<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodPassword>;
}, "strip", z.ZodTypeAny>, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}>;
export declare class grpcCreateUserDto extends grpcCreateUserDto_base {
}
declare const CreatedUserDto_base: import("nestjs-zod").ZodDto<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role?: "User" | "Admin" | undefined;
}, z.ZodObjectDef<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        User: "User";
        Admin: "Admin";
    }>>;
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny>, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role?: "User" | "Admin" | undefined;
}>;
export declare class CreatedUserDto extends CreatedUserDto_base {
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
