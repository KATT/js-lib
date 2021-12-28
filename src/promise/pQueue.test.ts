import { _range } from '../array/range'
import { pDelay, pExpectedError, pMap } from '../index'
import { PQueue } from './pQueue'

test('PQueue', async () => {
  const q = new PQueue({
    concurrency: 1,
    debug: true,
  })

  expect(q.inFlight).toBe(0)
  expect(q.queueSize).toBe(0)

  await q.onIdle() // should resolve immediately, cause the queue is empty

  // 5 jobs with delay of 10ms each
  const results = await pMap(_range(1, 6), i => {
    return q.push(() => pDelay(10, i))
  })

  expect(results).toEqual(_range(1, 6))

  expect(await pExpectedError(
    q.push(async () => {
      throw new Error('error123')
    })),
  ).toMatchInlineSnapshot('[Error: error123]')

  await q.onIdle()
})
