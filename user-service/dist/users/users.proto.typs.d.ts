import { z } from "nestjs-zod/z";
export declare enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
export declare enum CheckPasswordStatus {
    OK = 0,
    WRONG_PASSWORD = 1,
    NOT_FOUND = 2,
    INTERNAL = 3,
    UNRECOGNIZED = -1
}
declare const FindUserByIdRequest_base: import("nestjs-zod").ZodDto<{
    id: string;
}, z.ZodObjectDef<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    id: string;
}>;
export declare class FindUserByIdRequest extends FindUserByIdRequest_base {
}
declare const FindUserByEmailRequest_base: import("nestjs-zod").ZodDto<{
    email: string;
}, z.ZodObjectDef<Pick<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        User: "User";
        Admin: "Admin";
    }>>;
}, "email">, "strip", z.ZodTypeAny>, {
    email: string;
}>;
export declare class FindUserByEmailRequest extends FindUserByEmailRequest_base {
}
declare const FindUserByResponse_base: import("nestjs-zod").ZodDto<{
    user?: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        role?: "User" | "Admin" | undefined;
    } | undefined;
}, z.ZodObjectDef<{
    user: z.ZodOptional<z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
        email: z.ZodString;
        password: z.ZodPassword;
        role: z.ZodOptional<z.ZodNativeEnum<{
            User: "User";
            Admin: "Admin";
        }>>;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        role?: "User" | "Admin" | undefined;
    }, {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        role?: "User" | "Admin" | undefined;
    }>>;
}, "strip", z.ZodTypeAny>, {
    user?: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        role?: "User" | "Admin" | undefined;
    } | undefined;
}>;
export declare class FindUserByResponse extends FindUserByResponse_base {
}
declare const User_base: import("nestjs-zod").ZodDto<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    id: string;
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
}, "strip", z.ZodTypeAny>, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    id: string;
    role?: "User" | "Admin" | undefined;
}>;
export declare class User extends User_base {
}
declare const CreateUserRequest_base: import("nestjs-zod").ZodDto<{
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
}, "role">, "strip", z.ZodTypeAny>, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}>;
export declare class CreateUserRequest extends CreateUserRequest_base {
}
declare const CheckPasswordRequest_base: import("nestjs-zod").ZodDto<{
    email: string;
    password: string;
}, z.ZodObjectDef<Pick<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        User: "User";
        Admin: "Admin";
    }>>;
}, "email" | "password">, "strip", z.ZodTypeAny>, {
    email: string;
    password: string;
}>;
export declare class CheckPasswordRequest extends CheckPasswordRequest_base {
}
declare const CheckPasswordResponse_base: import("nestjs-zod").ZodDto<{
    status: CheckPasswordStatus;
    user?: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        role?: "User" | "Admin" | undefined;
    } | undefined;
}, z.ZodObjectDef<{
    status: z.ZodNativeEnum<typeof CheckPasswordStatus>;
    user: z.ZodOptional<z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
        email: z.ZodString;
        password: z.ZodPassword;
        role: z.ZodOptional<z.ZodNativeEnum<{
            User: "User";
            Admin: "Admin";
        }>>;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        role?: "User" | "Admin" | undefined;
    }, {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        role?: "User" | "Admin" | undefined;
    }>>;
}, "strip", z.ZodTypeAny>, {
    status: CheckPasswordStatus;
    user?: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        role?: "User" | "Admin" | undefined;
    } | undefined;
}>;
export declare class CheckPasswordResponse extends CheckPasswordResponse_base {
}
export {};
