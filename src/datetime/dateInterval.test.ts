import { DateInterval } from './dateInterval'
import { LocalDate } from './localDate'

test('basic', () => {
  const str1 = '2022-02-24/2022-03-30'
  const int1 = DateInterval.parse(str1)
  expect(int1.toString()).toBe(str1)
  expect(JSON.stringify(int1)).toBe(`"${str1}"`)
  expect(int1.start.isSame('2022-02-24'))
  expect(int1.end.isSame('2022-03-30'))

  const int2 = DateInterval.of('2022-02-24', '2022-03-30')
  const int3 = DateInterval.of(LocalDate.of('2022-02-24'), LocalDate.of('2022-03-30'))

  expect(int1.isSame(int2)).toBe(true)
  expect(int1.cmp(int2)).toBe(0)
  expect(int1.isSameOrAfter(int2)).toBe(true)
  expect(int1.isSameOrBefore(int2)).toBe(true)
  expect(int1.isAfter(int2)).toBe(false)
  expect(int1.isBefore(int2)).toBe(false)
  expect(int1.isSame(int3)).toBe(true)

  expect(() => DateInterval.parse('')).toThrowErrorMatchingInlineSnapshot(
    `"Cannot parse \\"\\" into DateInterval"`,
  )
  expect(() => DateInterval.parse('abcd')).toThrowErrorMatchingInlineSnapshot(
    `"Cannot parse \\"abcd\\" into DateInterval"`,
  )
  expect(() => DateInterval.parse('2022-02-24')).toThrowErrorMatchingInlineSnapshot(
    `"Cannot parse \\"2022-02-24\\" into DateInterval"`,
  )
  expect(() => DateInterval.parse('2022-02-24/abcd')).toThrowErrorMatchingInlineSnapshot(
    `"Cannot parse \\"abcd\\" into LocalDate"`,
  )
})