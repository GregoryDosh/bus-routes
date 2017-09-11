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

  it('should create an action to open the side nav', () => {
    const expectedAction = {
      type: types.OPEN_SIDE_NAV,
    }
    expect(actions.openSideNav()).toEqual(expectedAction)
  })

  it('should create an action to close the side nav', () => {
    const expectedAction = {
      type: types.CLOSE_SIDE_NAV,
    }
    expect(actions.closeSideNav()).toEqual(expectedAction)
  })

  it('should create an action to open the add stop', () => {
    const expectedAction = {
      type: types.OPEN_ADD_STOP_DIALOG,
    }
    expect(actions.openAddStopDialog()).toEqual(expectedAction)
  })

  it('should create an action to close the add stop', () => {
    const expectedAction = {
      type: types.CLOSE_ADD_STOP_DIALOG,
    }
    expect(actions.closeAddStopDialog()).toEqual(expectedAction)
  })
})
