import { is } from "./predicat"
import type { Either, Maybe } from "./monads"
import { Just, left, right } from "./monads"
import type { Fn1 } from "./types"

export const ifElse = <T, U>(bool: boolean, falseFn: Fn1<U>, trueFn: Fn1<T>): T | U => {
  if (bool === true)
    return trueFn()
  else return falseFn()
}

export const ifElseEither = <U, V>(bool: boolean, leftFn: Fn1<U>, rightFn: Fn1<V>): Either<U, V> => {
  if (bool === true)
    return right(rightFn())
  else
    return left(leftFn())
}

export const matchMaybe = <T, U, V>(maybe: Maybe<T>, justFn: Fn1<U>, nothingFn: Fn1<V>): U | V => {
  return ifElse(is(maybe, Just), justFn, nothingFn)
}

// if (is(maybe, Just))
//   return justFn(maybe.from())
// else return nothingFn()
// }

// export const matchMaybe = <T, U>(maybe: Maybe, justFn: Fn(T, U), nothingFn: () => U): U => {
//   if (is(maybe, Just)) return justFn(maybe.from())
//   else return nothingFn()
// }

// export const matchEither = <T, U>(either: Either<T, U>, rightFn: (val: T) => U, leftFn: (val: T) => U): U => {
//   if (is<Right<T>>(Either, Right)) return rightFn(either.from())
//   else return leftFn(either.from())
// }
