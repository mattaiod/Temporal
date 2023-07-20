

export const always = <T>(value: T) => value

export const doAndReturn = <T>(value: T, fn: (val: T) => any) => {
  fn(value)
  return value
}

export const doAndReturnC = <T>(fn: (val: T) => any) => (value: T) => {
  fn(value)
  return value
}


export const unshift = <T>(value: T) => (arr: T[]) => {
  arr.unshift(value)
  return arr
}

export const cD = structuredClone