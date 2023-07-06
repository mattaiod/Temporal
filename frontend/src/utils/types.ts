export interface Class<T> extends Function {
  new (...args: any[]): T
}

export type Fn = (...args: any[]) => any
export type Fn1<T> = (...args: any[]) => T

export interface AnyObject {
  [key: string | number | symbol]: any
}

export type Undefinable<T> = T | undefined

export type Nullable<T> = T | null

export type Nullish<T> = T | null | undefined

export type NotNull = string | number | boolean | symbol | object | Function | bigint | undefined

export interface ResAPI<T> {
  data: T
  error: string
}

export type ValueOf<T> = T[keyof T]
