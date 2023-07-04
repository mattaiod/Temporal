import * as R from "ramda"
import type { Either } from "./monads"
import { left, right } from "./monads"

export const throwErr = (arg = "err") => {
  throw new Error(arg)
}

export const hasError = (arg: any) => arg?.error

export const tryCatch = async <T, U, V>(tryFn: () => Promise<T>, catchFn: (err: U) => Promise<V> | V): Promise<T | V> => {
  try {
    return await tryFn()
  }
  catch (err: any) {
    return await catchFn(err)
  }
}

export const tryCatchToEither = async <T, U, V>(tryFn: () => Promise<T>, catchFn: (err: U) => Promise<V>) => {
  try {
    return right(await tryFn())
  }
  catch (err: any) {
    return left(await catchFn(err))
  }
}

export class ErrorFatalValueForbidden extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ErrorValueForbidden"
  }
}

export class ErrorFetch extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ErrorFetch"
  }
}

export class ErrorFatalNever extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ErrorFatalNever"
  }
}

