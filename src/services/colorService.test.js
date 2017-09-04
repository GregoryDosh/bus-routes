import { stringHSLColorHash } from './colorService'

describe('stringHSLColorHash', () => {
  it('should return a color with no input', () => {
    expect(stringHSLColorHash('')).toEqual(117)
  })

  it('should return a color with some text', () => {
    expect(stringHSLColorHash('Test Input')).toEqual(1)
  })

  it('should return different colors for different text', () => {
    expect(stringHSLColorHash('Test Input')).not.toEqual(stringHSLColorHash('Other Test Input'))
  })
})
