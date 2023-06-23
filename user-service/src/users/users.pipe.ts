import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import { createZodValidationPipe } from 'nestjs-zod'
import {ZodError} from "zod";
import {fromZodError} from "zod-validation-error";



export const UsersValidationPipe = createZodValidationPipe({
  // provide custom validation exception factory

  createValidationException: (error: ZodError) =>
      new BadRequestException(fromZodError(error)),
})
