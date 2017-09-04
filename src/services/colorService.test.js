import { stringColorHash } from './colorService'

describe('stringColorHash', () => {
  it('should return a color with no input', () => {
    expect(stringColorHash('')).toEqual(355)
  })

  it('should return a color with some text', () => {
    expect(stringColorHash('Test Input')).toEqual(328)
  })

  it('should return different colors for different text', () => {
    expect(stringColorHash('Test Input')).not.toEqual(stringColorHash('Other Test Input'))
  })
})
