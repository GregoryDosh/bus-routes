import * as actions from './layoutActions'
import * as types from './actionTypes'

describe('layout actions', () => {
  it('should create an action to set helmet\'s title', () => {
    const helmetTitle = 'New Record!'
    const expectedAction = {
      type: types.SET_HELMET_TITLE,
      helmetTitle,
    }
    expect(actions.setHelmetTitle(helmetTitle)).toEqual(expectedAction)
  })

  it('should create an action to open the sidenav', () => {
    const expectedAction = {
      type: types.OPEN_SIDE_NAV,
    }
    expect(actions.openSidenav()).toEqual(expectedAction)
  })

  it('should create an action to close the sidenav', () => {
    const expectedAction = {
      type: types.CLOSE_SIDE_NAV,
    }
    expect(actions.closeSidenav()).toEqual(expectedAction)
  })

})
