import { Primitive } from './typeFest'
import { AnyObject, FalsyValue, NullishValue } from './types'

type Nullish<T> = T extends NullishValue ? T : never
type Truthy<T> = T extends FalsyValue ? never : T
type Falsy<T> = T extends FalsyValue ? T : never

export const _isNull = <T>(v: T): v is T extends null ? T : never => v === null
export const _isUndefined = <T>(v: T): v is T extends undefined ? T : never =>
  typeof v === 'undefined'
export const _isNullish = <T>(v: T): v is Nullish<T> => typeof v === 'undefined' || v === null
export const _isNotNullish = <T>(v: T): v is NonNullable<T> => v !== undefined && v !== null

/**
 * Same as Boolean, but with correct type output.
 * Related:
 * https://github.com/microsoft/TypeScript/issues/16655
 * https://www.karltarvas.com/2021/03/11/typescript-array-filter-boolean.html
 *
 * @example
 *
 * [1, 2, undefined].filter(_isTruthy)
 * // => [1, 2]
 */
export const _isTruthy = <T>(v: T): v is Truthy<T> => !!v
export const _isFalsy = <T>(v: T): v is Falsy<T> => !v

/**
 * Returns true if item is Object, not null and not Array.
 */
export function _isObject(item: any): item is AnyObject {
  return (typeof item === 'object' && item !== null && !Array.isArray(item)) || false
}

export function _isPrimitive(v: any): v is Primitive {
  return (
    v === null ||
    v === undefined ||
    typeof v === 'number' ||
    typeof v === 'boolean' ||
    typeof v === 'string' ||
    typeof v === 'bigint' ||
    typeof v === 'symbol'
  )
}

export function _isEmptyObject(obj: any): boolean {
  return obj && obj.constructor === Object && Object.keys(obj).length === 0
}

/**
 * Object is considered empty if it's one of:
 * undefined
 * null
 * '' (empty string)
 * [] (empty array)
 * {} (empty object)
 * new Map() (empty Map)
 * new Set() (empty Set)
 */
export function _isEmpty(obj: any): boolean {
  if (obj === undefined || obj === null) return true

  if (typeof obj === 'string' || Array.isArray(obj)) {
    return obj.length === 0
  }

  if (obj instanceof Map || obj instanceof Set) {
    return obj.size === 0
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0
  }

  return false
}
