import * as R from 'ramda'

export const always = <T>(value: T) => value

export const doAndReturn = <T>(value: T, fn: (val: T) => any) => {
  fn(value)
  return value
}

export const doAndReturnC = <T>(fn: (val: T) => any) => (value: T) => {
  fn(value)
  return value
}

export const compose = R.compose

export const compose2 = <T, U, V>(fn1: (val: T) => U, fn2: (val: U) => V) => (val: T) => fn2(fn1(val))

