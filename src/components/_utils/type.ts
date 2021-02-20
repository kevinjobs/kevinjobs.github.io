export const tuple = <T extends string[]> (...args: T) => args;

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;