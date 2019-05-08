import { pDelay } from '@naturalcycles/promise-lib'
import { logMillis } from './logMillis.decorator'

class C {
  @logMillis()
  syncMethodSuccess () {
    return 'a'
  }

  @logMillis()
  syncMethodThrow () {
    throw new Error('MyError')
  }

  @logMillis()
  async asyncMethodSuccess () {
    await pDelay(10)
    return 'a'
  }

  @logMillis()
  async asyncMethodThrow () {
    await pDelay(10)
    throw new Error('MyError')
  }

  @logMillis({ avg: 3, noLogArgs: true })
  async asyncMethodSuccessAvg (delay: number) {
    await pDelay(delay)
    return 'a'
  }
}

const c = new C()

test('syncMethodSuccess', async () => {
  const r = c.syncMethodSuccess()
  expect(r).toBe('a')
})

test('syncMethodSuccessAvg', async () => {
  // Repeating to test count and avg
  await c.asyncMethodSuccessAvg(1)
  await c.asyncMethodSuccessAvg(10)
  await c.asyncMethodSuccessAvg(20)
  await c.asyncMethodSuccessAvg(30)
})

test('syncMethodThrow', async () => {
  expect(() => c.syncMethodThrow()).toThrow('MyError')
})

test('asyncMethodSuccess', async () => {
  const r = await c.asyncMethodSuccess()
  expect(r).toBe('a')
})

test('asyncMethodThrow', async () => {
  await expect(c.asyncMethodThrow()).rejects.toThrow('MyError')
})