import { describe, expect, test } from 'vitest'

import { multiply } from './calculator'

describe('Calculator', () => {
  test('mutliply', () => {
    expect(multiply(2, 3)).toEqual(6)
    expect(multiply(-1, 4)).toEqual(-4)
    expect(multiply(0, 2)).toEqual(0)
  })
})
