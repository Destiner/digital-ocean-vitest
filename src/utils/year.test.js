import { describe, expect, test, vi } from 'vitest'

import { getCurrentYear } from './year'

describe('Year', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('getCurrentYear', () => {
    vi.setSystemTime(new Date(2025, 4, 13, 3, 14, 0))
    expect(getCurrentYear()).toEqual(2025);
  })
})
