import type { AnyObject } from './types'
export const hydrate = (sourceToHydrate: AnyObject, objForHydrating: AnyObject): void => {
  for (const [key] of Object.entries(sourceToHydrate)) sourceToHydrate[key] = objForHydrating[key]
}

export const hydrateStrict = (sourceToHydrate: AnyObject, objForHydrating: AnyObject): void => {
  for (const [key] of Object.entries(sourceToHydrate)) {
    if (key in objForHydrating)
      sourceToHydrate[key] = objForHydrating[key]
    else throw new Error(`Key ${key} not found in objForHydrating for hydrating`)
  }
}

export const isObject = (obj: unknown): obj is Object => Object.prototype.toString.call(obj) === '[object Object]'

export const set = <T extends AnyObject>(obj: T, key: keyof T, value: T[keyof T]): T => {
  obj[key] = value
  return obj
}

export const setC = <T extends AnyObject>(obj: T, key: keyof T) => (value: T[keyof T]): T => {
  obj[key] = value
  return obj
}

