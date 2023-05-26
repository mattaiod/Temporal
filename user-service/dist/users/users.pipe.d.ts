import { PipeTransform } from '@nestjs/common';
export declare const UsersValidationPipe: new (schemaOrDto?: import("zod").ZodType<any, import("zod").ZodTypeDef, any> | import("nestjs-zod").ZodDto<any, import("zod").ZodTypeDef, any> | undefined) => PipeTransform<any, any>;
