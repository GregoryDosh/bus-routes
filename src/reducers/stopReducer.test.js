import reducer from './stopReducer'
import * as types from '../actions/actionTypes'

describe('layout reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        description: 'Stop',
        number: 0,
        busses: [],
      }
    )
  })

  it('should handle SET_STOP_DESCRIPTION', () => {
    expect(
      reducer({}, {
        type: types.SET_STOP_DESCRIPTION,
        description: 'Some Stop Description Here',
        number: '1234',
      })
    ).toEqual(
      {
        description: 'Some Stop Description Here',
        number: 1234,
      }
    )
  })

  it('should handle SET_STOP_DESCRIPTION with real number', () => {
    expect(
      reducer({}, {
        type: types.SET_STOP_DESCRIPTION,
        description: 'Some Stop Description Here',
        number: 1234,
      })
    ).toEqual(
      {
        description: 'Some Stop Description Here',
        number: 1234,
      }
    )
  })

  it('should handle SET_STOP_DESCRIPTION with bad number', () => {
    expect(
      reducer({}, {
        type: types.SET_STOP_DESCRIPTION,
        description: 'Some Stop Description Here',
        number: 'ASDF',
      })
    ).toEqual(
      {
        description: 'Some Stop Description Here',
        number: 0,
      }
    )
  })
})
