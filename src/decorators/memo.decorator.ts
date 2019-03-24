// Based on:
// https://github.com/mgechev/memo-decorator/blob/master/index.ts
// http://decodize.com/blog/2012/08/27/javascript-memoization-caching-results-for-better-performance/
// http://inlehmansterms.net/2015/03/01/javascript-memoization/
// https://community.risingstack.com/the-worlds-fastest-javascript-memoization-library/

/*
Optimized for 0 arguments (using SingleValueCache).
Optimized for 1 primitive argument (skips JSON.stringify).
Otherwise resorts to JSON.stringify.
Benchmark shows similar perf for ObjectCache and MapCache.
 */

/* tslint:disable:no-invalid-this */

import { jsonMemoSerializer, MapMemoCache, MemoCache, SingleValueMemoCache } from './memo.util'

/**
 * Memoizes the method of the class, so it caches the output and returns the cached version if the "key"
 * of the cache is the same. Key, by defaul, is calculated as `JSON.stringify(...args)`.
 * Cache is stored indefinitely in internal Map.
 * There is more advanced version of memo decorator called `memoCache`.
 *
 * Supports dropping it's cache by calling .dropCache() method of decorated function (useful in unit testing).
 */
export const memo = () => (
  target: any,
  key: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor => {
  if (typeof descriptor.value !== 'function') {
    throw new Error('Memoization can be applied only to methods')
  }

  const originalFn = descriptor.value
  // console.log('len: ' + originalFn.length)

  let cache: MemoCache

  // Function with 0 arguments
  if (!originalFn.length) {
    cache = new SingleValueMemoCache()
  } else {
    // Function with > 0 arguments
    cache = new MapMemoCache()
    // cache = new ObjectMemoCache()
  }

  descriptor.value = function (...args: any[]): any {
    const cacheKey = jsonMemoSerializer(args)

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    const res: any = originalFn.apply(this, args)

    cache.set(cacheKey, res)
    // console.log('miss', cacheKey)

    return res
  }

  descriptor.value.dropCache = () => {
    console.log(`memo.dropCache (method=${key})`)
    cache.clear()
  }

  return descriptor
}
