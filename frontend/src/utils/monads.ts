import type * as P from "pratica"
import { is, isGlobal } from "./predicat"
import { throwErr } from "./error"
import type { Class } from "./types"
import { doAndReturn } from "./function"

/* Maybe */

export class Nothing {
  kind = "Nothing" as const
  _uniqNothing = null
}

export class Just<T> {
  kind = "Just" as const
  constructor(public value: T) { }
}

export const fromJust = <T>(value: Just<T>): T => value.value

export const fromMaybe = <T>(value: Maybe<T>, defaultValue: T): T => {
  if (value instanceof Nothing)
    return defaultValue
  else
    return value.value
}

export const nothing = () => new Nothing()

export const isNothing = <T>(value: Maybe<T>): value is Nothing => value instanceof Nothing

export const just = <T>(value: T): Just<T> => new Just(value)
export const isJust = <T>(value: Maybe<T>): value is Just<T> => value instanceof Just

export const maybe = <T>(value: T | null | undefined): Maybe<T> => {
  if (value === null || value === undefined)
    return nothing()
  else
    return new Just(value)
}

export const nullToMaybe = <T>(value: T | null): Maybe<T> => {
  if (value === null)
    return nothing()
  else
    return new Just(value)
}

export type Maybe<T> = Nothing | Just<T>

/* Either */
abstract class EitherClass<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }

  private _uniqEitherClass = null
}

export class Left<T> {
  kind = "Left" as const
  constructor(public value: T) {

  }

  _uniqLeft = null
}

export class Right<T> {
  kind = "Right" as const
  constructor(public value: T) {
  }

  public _uniqRight = null
}

export type Either<L, R> = Left<L> | Right<R>

export const right = <T>(value: T): Either<never, T> => new Right(value)
export const rightDoAndReturnC = <T>(fn: (val: T) => any) => (value: T): Either<never, T> => {
  fn(value)
  return right(value)
}
export const left = <T>(value: T): Either<T, never> => new Left(value)

export const either = <T, U, V, W>(either: Either<T, U>, leftFn: (val: T) => V, rightFn: (val: U) => W) => {
  return either instanceof Left ? leftFn(either.value) : rightFn(either.value)
}

export const maybeToEither = <T>(value: Maybe<T>, error: Error): Either<Error, T> => {
  if (value instanceof Nothing)
    return left(error)
  else
    return right(value.value)
}

export const ifLeft = <T, U>(either: Either<T, U>, fn: (val: T) => any) => {
  if (either instanceof Left)
    fn(either.value)
  return either
}

export const ifRight = <T, U>(either: Either<T, U>, fn: (val: U) => any) => {
  if (either instanceof Right)
    fn(either.value)
  return either
}

export const isLeft = <T, U>(either: Either<T, U>): either is Left<T> => either.kind === "Left"
export const isRight = <T, U>(either: Either<T, U>): either is Right<U> => either.kind === "Right"

export const eitherAlwaysIfRight = <T, U, V>(either: Either<T, U>, fn: (val: U) => V | Promise<V>) => {
  if (either instanceof Right)
    fn(either.value)
  return either
}

export const eitherAlwaysIfRightAsync = async <T, U, V>(either: () => Promise<Either<T, U>>, fn: (val: U) => V | Promise<V>) => {
  const res = await either()
  if (res instanceof Right)
    await fn(res.value)
  return either
}

export const eitherAlwaysIfRightC = <T, U, V>(fn: (val: U) => V) => (either: Either<T, U>) => {
  if (either instanceof Right)
    fn(either.value)
  return either
}

export const eitherDoAndReturn = async <T, U, V, W>(either: Either<T, U>, fn: ((val: T) => W | Promise<W>), fn2: (val: U) => V | Promise<V>) => {
  if (either instanceof Left)
    await fn(either.value)
  else
    await fn2(either.value)
  return either
}

export const getValueKeyEitherRight = <L, R, K extends keyof R>(either: Either<L, R>, key: K): Left<L> | Right<R[K]> => {
  if (either instanceof Right)
    return right(either.value[key])
  else
    return either
}

export const switchEither = async <T, U, V, W> (either: Either<T, U>, leftFn: (val: T) => V, rightFn: (val: U) => W | Promise<W>) => {
  return either instanceof Left ? leftFn(either.value) : await rightFn(either.value)
}

export const fromEither = <T, U>(either: Either<T, U>) => either.value

// thrower
abstract class ThrowerClass<T> {
  constructor(private value: T) {}

  from(): T {
    return this.value
  }

  private _uniqThrowerClass = null
}

export class ThrowLeft<T> extends ThrowerClass<T> {
  constructor(value: T) {
    super(value)
  }

  private _uniqThrowLeft = null
}

export class ThrowRight<T> extends ThrowerClass<T> {
  constructor(value: T) {
    super(value)
  }

  private _uniqThrowRight = null
}

export type Thrower<L, R> = ThrowLeft<L> | ThrowRight<R> | R

// export const catchThrower = <L, R>(fn: () => Thrower<L, R>): Either<L, R> => {
//   try {
//     const res = fn()
//     if (isGlobal(res, ThrowerClass)) {
//       if (is(res, ThrowRight))
//         return right(res.from())
//       else return throwErr("missing throw in throwLeft")
//     }
//     else {
//       return right(res)
//     }
//   }
//   catch (e: any) {
//     if (is(e, ThrowLeft))
//       return left(e.from())
//     else throw e
//   }
// }

