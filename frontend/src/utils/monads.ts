import { is, isGlobal } from "./predicat"
import { throwErr } from "./error"
import type { Class } from "./types"
import { doAndReturn } from "./function"

/* Maybe */
export class Nothing {
  constructor() {}
}

export class Just<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }
}

export type Maybe<T> = Nothing | Just<T>

/* Either */
abstract class EitherClass<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }
}

export class Left<T> extends EitherClass<T> {
  constructor(value: T) {
    super(value)
  }
}

export class Right<T> extends EitherClass<T> {
  constructor(value: T) {
    super(value)
  }

  uniqRight = () => this
}

export type Either<L, R> = Left<L> | Right<R>

export const right = <T>(value: T): Either<never, T> => new Right(value)
export const rightDoAndReturnC = <T>(fn: (val: T) => any) => (value: T): Either<never, T> => {
  fn(value)
  return right(value)
}
export const left = <T>(value: T): Either<T, never> => new Left(value)

export const either = <T, U, V, W>(either: Either<T, U>, leftFn: (val: T) => V, rightFn: (val: U) => W) => {
  return either instanceof Left ? leftFn(either.from()) : rightFn(either.from())
}

export const ifLeft = <T, U>(either: Either<T, U>, fn: (val: T) => any) => {
  if (either instanceof Left)
    fn(either.from())
  return either
}

export const ifRight = <T, U>(either: Either<T, U>, fn: (val: U) => any) => {
  if (either instanceof Right)
    fn(either.from())
  return either
}

export const isLeft = <T, U>(either: Either<T, U>): either is Left<T> => either instanceof Left
export const isRight = <T, U>(either: Either<T, U>): either is Right<T> => either instanceof Right

export const eitherAlwaysIfRight = <T, U, V>(either: Either<T, U>, fn: (val: U) => V) => {
  if (either instanceof Right)
    fn(either.from())
  return either
}

export const eitherDoAndReturn = async <T, U, V, W>(either: Either<T, U>, fn: ((val: T) => W | Promise<W>), fn2: (val: U) => V | Promise<V>) => {
  if (either instanceof Left)
    await fn(either.from())
  else
    await fn2(either.from())
  return either
}

export const getValueKeyEitherRight = <L, R, K extends keyof R>(either: Either<L, R>, key: K): Left<L> | R[K] => {
  if (either instanceof Right)
    return either.from()[key]
  else
    return either
}

// thrower
abstract class ThrowerClass<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }
}

export class ThrowLeft<T> extends ThrowerClass<T> {
  constructor(value: T) {
    super(value)
  }
}

export class ThrowRight<T> extends ThrowerClass<T> {
  constructor(value: T) {
    super(value)
  }
}

export type Thrower<L, R> = ThrowLeft<L> | ThrowRight<R> | R

export const catchThrower = <L, R>(fn: () => Thrower<L, R>): Either<L, R> => {
  try {
    const res = fn()
    if (isGlobal(res, ThrowerClass)) {
      if (is(res, ThrowRight))
        return right(res.from())
      else return throwErr("missing throw in throwLeft")
    }
    else {
      return right(res)
    }
  }
  catch (e: any) {
    if (is(e, ThrowLeft))
      return left(e.from())
    else throw e
  }
}
