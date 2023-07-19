export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;
export type Option<T> = T | null | undefined;