import { routerConfig, sidenavConfig } from './routerConfig'

describe('routerConfig', () => {
  it('should be an object', () => {
    expect(typeof routerConfig).toBe('object')
  })
})

describe('SidenavConfig', () => {
  it('should be an object', () => {
    expect(typeof sidenavConfig).toBe('object')
  })
})
