import functions from './index'

describe('summation', () => {
  it('[1] summation returns a number', () => {
    expect(functions.summation(4)).toBe(10)
    expect(functions.summation(10)).toBe(55)
  })
  it('[2] summation returns zero if passed zero', () => {
    expect(functions.summation(0)).toBe(0)
  })
  it('[3] summation returns zero if passed a negative number', () => {
    expect(functions.summation(-10)).toBe(0)
  })
})
