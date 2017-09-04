import reducer from './layoutReducer'
import * as types from '../actions/actionTypes'

describe('layout reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        sidenavOpen: false,
        helmetTitle: '',
      }
    )
  })

  it('should handle OPEN_SIDE_NAV', () => {
    expect(
      reducer({}, {
        type: types.OPEN_SIDE_NAV,
        isOpen: true,
      })
    ).toEqual(
      { sidenavOpen: true }
    )
  })

  it('should handle CLOSE_SIDE_NAV', () => {
    expect(
      reducer({}, {
        type: types.CLOSE_SIDE_NAV,
        isOpen: false,
      })
    ).toEqual(
      { sidenavOpen: false }
    )
  })

  it('should handle SET_HELMET_TITLE', () => {
    expect(
      reducer({}, {
        type: types.SET_HELMET_TITLE,
        helmetTitle: 'New Record!',
      })
    ).toEqual(
      { helmetTitle: 'New Record!' }
    )
  })
})
