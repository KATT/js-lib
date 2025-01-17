import { deepFreeze } from '@naturalcycles/dev-lib/dist/testing'
import { _createDeterministicRandom } from '../number/createDeterministicRandom'
import {
  _by,
  _chunk,
  _countBy,
  _difference,
  _dropRightWhile,
  _dropWhile,
  _findLast,
  _flatten,
  _flattenDeep,
  _groupBy,
  _intersection,
  _last,
  _lastOrUndefined,
  _mapToObject,
  _max,
  _maxOrUndefined,
  _min,
  _minOrUndefined,
  _shuffle,
  _sortBy,
  _sum,
  _sumBy,
  _takeRightWhile,
  _takeWhile,
  _uniq,
  _uniqBy,
} from './array.util'
import { _range } from './range'

test('_chunk', () => {
  const a = [1, 2, 3, 4, 5, 6]

  expect(_chunk(a)).toEqual([[1], [2], [3], [4], [5], [6]])

  expect(_chunk(a, 2)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ])

  const b = [1, 2, 3]
  expect(_chunk(b, 2)).toEqual([[1, 2], [3]])

  expect(_chunk([])).toEqual([])
})

test('_flatten', () => {
  const a = [[1, 2], [3], [4, 5]]
  expect(_flatten(a)).toEqual([1, 2, 3, 4, 5])
})

test('_flattenDeep', () => {
  expect(_flattenDeep([[1, 2], [3], [4, 5]])).toEqual([1, 2, 3, 4, 5])
  expect(_flattenDeep([[1, [2]], [3], [4, 5]])).toEqual([1, 2, 3, 4, 5])
})

test('_uniq', () => {
  const a = [1, 2, 2, 1, 3, 5, 3, 4]
  expect(_uniq(a)).toEqual([1, 2, 3, 5, 4])
})

test('_uniqBy', () => {
  const a = [1, 2, 2, 1, 3, 5, 3, 4]
  expect(_uniqBy(a, a => a)).toEqual([1, 2, 3, 5, 4])

  expect(_uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2])

  expect(_uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], r => r.x)).toEqual([{ x: 1 }, { x: 2 }])
})

test('_by', () => {
  // expect(_by(undefined, (r: any) => r.a)).toEqual({})

  const a = [{ a: 'aa' }, { a: 'ab' }, { b: 'bb' }]
  let r = _by(a, r => r.a)
  expect(r).toEqual({
    aa: { a: 'aa' },
    ab: { a: 'ab' },
  })

  r = _by(a, v => v.a)
  expect(r).toEqual({
    aa: { a: 'aa' },
    ab: { a: 'ab' },
  })

  r = _by(a, v => v.a?.toUpperCase())
  expect(r).toEqual({
    AA: { a: 'aa' },
    AB: { a: 'ab' },
  })
})

test('_groupBy', () => {
  expect(_groupBy(_range(5), n => (n % 2 ? 'odd' : 'even'))).toEqual({
    even: [0, 2, 4],
    odd: [1, 3],
  })
})

test('_sortBy', () => {
  const a = [{ age: 20 }, { age: 10 }]
  deepFreeze(a)
  expect(_sortBy(a, r => r.age)).toEqual([{ age: 10 }, { age: 20 }])
  expect(_sortBy(a, o => o.age)).toEqual([{ age: 10 }, { age: 20 }])
  expect(_sortBy(a, o => o.age, false, true)).toEqual([{ age: 20 }, { age: 10 }])
})

test('_sortBy with mutation', () => {
  const a = [{ age: 20 }, { age: 10 }]
  const r = _sortBy(a, r => r.age, true)
  expect(r).toEqual([{ age: 10 }, { age: 20 }])
  expect(r).toBe(a)
})

test('_findLast', () => {
  expect(_findLast([1, 2, 3, 4], n => n % 2 === 1)).toBe(3)
})

test('_takeWhile', () => {
  expect(_takeWhile([1, 2, 3, 4, 5, 2, 1], v => v <= 3)).toEqual([1, 2, 3])
  expect(_takeWhile([1, 2, 3, 4, 5, 2, 1], v => v > 5)).toEqual([])
})

test('_takeRightWhile', () => {
  expect(_takeRightWhile([1, 2, 3, 4, 5, 2, 1], v => v <= 3)).toEqual([1, 2])
  expect(_takeRightWhile([1, 2, 3, 4, 5, 2, 1], v => v > 5)).toEqual([])
})

test('_dropWhile', () => {
  expect(_dropWhile([1, 2, 3, 4, 5, 2, 1], v => v <= 3)).toEqual([4, 5, 2, 1])
  expect(_dropWhile([1, 2, 3, 4, 5, 2, 1], v => v > 5)).toEqual([1, 2, 3, 4, 5, 2, 1])
  expect(_dropWhile([1, 2, 3, 4, 5, 2, 1], v => v < 10)).toEqual([])
})

test('_dropRightWhile', () => {
  expect(_dropRightWhile([1, 2, 3, 4, 5, 2, 1], v => v <= 3)).toEqual([1, 2, 3, 4, 5])
  expect(_dropRightWhile([1, 2, 3, 4, 5, 2, 1], v => v > 5)).toEqual([1, 2, 3, 4, 5, 2, 1])
  expect(_dropRightWhile([1, 2, 3, 4, 5, 2, 1], v => v < 10)).toEqual([])
})

test('_countBy', () => {
  expect(_countBy(['a', 'aa', 'aaa', 'aaa', 'aaaa'], r => r.length)).toEqual({
    1: 1,
    2: 1,
    3: 2,
    4: 1,
  })

  expect(_countBy([1, 2, 3, 4, 5], n => (n % 2 === 0 ? 'even' : 'odd'))).toEqual({
    even: 2,
    odd: 3,
  })
})

test('_intersection', () => {
  const f = _intersection
  expect(f()).toEqual([])
  expect(f([1])).toEqual([1])
  expect(f([1], [1])).toEqual([1])
  expect(f([1], [1, 2])).toEqual([1])
  expect(f([1], [2])).toEqual([])
  expect(f([2, 1], [2, 3])).toEqual([2])

  expect(f([1], [1], [1])).toEqual([1])
  expect(f([1], [1], [])).toEqual([])
  expect(f([1], [1, 2], [])).toEqual([])
  expect(f([1, 2], [1, 2, 3], [1, 2, 3, 4])).toEqual([1, 2])
})

test('_difference', () => {
  const f = _difference
  expect(f([1])).toEqual([1])
  expect(f([1], [1])).toEqual([])
  expect(f([1], [1, 2])).toEqual([])
  expect(f([1, 2], [2])).toEqual([1])
  expect(f([2, 1], [2, 3])).toEqual([1])
  expect(f([2, 1], [3])).toEqual([2, 1])
  expect(f([2, 4, 1], [3], [2], [3])).toEqual([4, 1])
})

test('_mapToObject', () => {
  expect(_mapToObject(_range(3), i => [i, i * 2])).toEqual({
    0: 0,
    1: 2,
    2: 4,
  })

  expect(_mapToObject(_range(3), i => [i, `id${i}`])).toEqual({
    0: 'id0',
    1: 'id1',
    2: 'id2',
  })

  // Filtering
  expect(_mapToObject(_range(5), i => i % 2 && [i, i])).toEqual({
    1: 1,
    3: 3,
  })
})

test('_shuffle', () => {
  const a = [1, 2, 3, 4, 5]
  Object.freeze(a) // should not be mutated

  const deterministicRandom = _createDeterministicRandom()
  jest.spyOn(Math, 'random').mockImplementation(() => deterministicRandom())

  const b = _shuffle(a)
  expect(b).toMatchInlineSnapshot(`
    [
      1,
      3,
      4,
      2,
      5,
    ]
  `)

  _shuffle(b, true)
  // should be mutated
  expect(b).toMatchInlineSnapshot(`
    [
      2,
      3,
      4,
      1,
      5,
    ]
  `)
})

test.each([
  [[], 0],
  [[2], 2],
  [[-1, 4], 3],
])('_sum %s == %s', (items: number[], result: number) => {
  expect(_sum(items)).toBe(result)
})

test('_sumBy', () => {
  const items = [
    { a: 1 },
    { a: 2 },
    { b: 3 }, // a is undefined
  ]

  expect(_sumBy(items, i => i.a)).toBe(3)
})

test('_last', () => {
  expect(_lastOrUndefined([])).toBeUndefined()
  expect(_lastOrUndefined([undefined])).toBeUndefined()
  expect(_lastOrUndefined([1, undefined])).toBeUndefined()
  expect(_lastOrUndefined([1, 2])).toBe(2)
  expect(_lastOrUndefined([1])).toBe(1)

  expect(() => _last([])).toThrowErrorMatchingInlineSnapshot(`"_last called on empty array"`)
  expect(_last([undefined])).toBeUndefined()
  expect(_last([1, undefined])).toBeUndefined()
  expect(_last([1, 2])).toBe(2)
  expect(_last([1])).toBe(1)
})

test('_min', () => {
  expect(_minOrUndefined([])).toBeUndefined()
  expect(_minOrUndefined([3])).toBe(3)
  expect(_minOrUndefined([3, 2])).toBe(2)
  expect(_minOrUndefined([1, 3, 2])).toBe(1)

  expect(() => _min([])).toThrowErrorMatchingInlineSnapshot(`"_min called on empty array"`)
  expect(_min([3])).toBe(3)
  expect(_min([3, 2])).toBe(2)
  expect(_min([1, 3, 2])).toBe(1)
  expect(_min(['3'])).toBe('3')
  expect(_min(['3', '2'])).toBe('2')
  expect(_min(['1', '3', '2'])).toBe('1')

  const v = _min([1, undefined])
  const _r = v + 1 // tests that v is not undefined

  expect(_min([1, undefined])).toBe(1)
  expect(_min([undefined, 1])).toBe(1)
  expect(_min([undefined, 2, 1])).toBe(1)
  expect(_min([undefined, 1, 2])).toBe(1)
})

test('_max', () => {
  expect(_maxOrUndefined([])).toBeUndefined()
  expect(_maxOrUndefined([3])).toBe(3)
  expect(_maxOrUndefined([3, 2])).toBe(3)
  expect(_maxOrUndefined([1, 3, 2])).toBe(3)

  expect(() => _max([])).toThrowErrorMatchingInlineSnapshot(`"_max called on empty array"`)
  expect(_max([3])).toBe(3)
  expect(_max([3, 2])).toBe(3)
  expect(_max([1, 3, 2])).toBe(3)
  expect(_max([1, 3, 2, 4])).toBe(4)
  expect(_max(['3'])).toBe('3')
  expect(_max(['3', '2'])).toBe('3')
  expect(_max(['1', '3', '2'])).toBe('3')
  expect(_max(['1', '3', '2', '4'])).toBe('4')
})
