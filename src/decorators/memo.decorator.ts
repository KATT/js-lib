// Based on:
// https://github.com/mgechev/memo-decorator/blob/master/index.ts
// http://decodize.com/blog/2012/08/27/javascript-memoization-caching-results-for-better-performance/
// http://inlehmansterms.net/2015/03/01/javascript-memoization/
/* tslint:disable:no-invalid-this */

type CacheKeyFn = (...args: any[]) => any

const jsonCacheKey: CacheKeyFn = (...args) => JSON.stringify(args)

/**
 * Memoizes the method of the class, so it caches the output and returns the cached version if the "key"
 * of the cache is the same. Key, by defaul, is calculated as `JSON.stringify(...args)`.
 * Cache is stored indefinitely in internal Map.
 * There is more advanced version of memo decorator called `memoCache`.
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

  const cache = new Map<string, any>()

  descriptor.value = function (...args: any[]): any {
    const cacheKey = jsonCacheKey(args)

    if (cache.has(cacheKey)) {
      const cached = cache.get(cacheKey)
      // console.log('returning value from cache: ', cacheKey, key)
      return cached
    }

    const res: any = originalFn.apply(this, args)
    cache.set(cacheKey, res)
    return res
  }

  return descriptor
}
