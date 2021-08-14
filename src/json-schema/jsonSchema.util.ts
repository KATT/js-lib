import { _filterNullishValues } from '../object/object.util'
import { JsonSchemaObject } from './jsonSchema.model'

/**
 * Merges s2 into s1 and returns s1.
 * Mutates s1.
 * Does not mutate s2.
 * API similar to Object.assign(s1, s2)
 */
export function mergeJsonSchemaObjects<T1, T2>(
  s1: JsonSchemaObject<T1>,
  s2: JsonSchemaObject<T2>,
): JsonSchemaObject<T1 & T2> {
  // Merge `properties`
  Object.entries(s2.properties).forEach(([k, v]) => {
    ;(s1.properties as any)[k] = v
  })

  // Merge `patternProperties`
  Object.entries(s2.patternProperties || {}).forEach(([k, v]) => {
    ;(s1.patternProperties as any)[k] = v
  })

  s1.propertyNames = s2.propertyNames || s1.propertyNames
  s1.minProperties = s2.minProperties ?? s1.minProperties
  s1.maxProperties = s2.maxProperties ?? s1.maxProperties

  // Merge `required`
  s1.required.push(...(s2.required as any))

  // `additionalProperties` remains the same

  return _filterNullishValues(s1, true) as any
}
