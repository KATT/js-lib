import { pExpectedError } from '../error/try'
import { pRetry } from './pRetry'

function createFn(succeedOnAttempt: number) {
  let attempt = 0
  return async function someFn(...args: any[]) {
    attempt++
    // console.log(`fn called attempt=${attempt}`, {args})
    if (attempt >= succeedOnAttempt) {
      return args
    }

    throw new Error(`fail`)
  }
}

test('pRetry', async () => {
  const fn = pRetry(createFn(3), {
    maxAttempts: 3,
    delay: 10,
    delayMultiplier: 1,
    logAll: true,
    // predicate: () => false,
    // logNone: true,
  })
  const r = await fn(1, 2, 3)
  // console.log(r)
  expect(r).toEqual([1, 2, 3])
})

test('pRetry should throw on fail', async () => {
  const fn = pRetry(createFn(3), {
    maxAttempts: 2, // so, it'll never succeed
    delay: 10,
    delayMultiplier: 1,
    logAll: true,
  })
  expect(await pExpectedError(fn(1, 2, 3))).toMatchInlineSnapshot('[Error: fail]')
})
