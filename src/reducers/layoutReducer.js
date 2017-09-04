import * as types from '../actions/actionTypes'

const initialState = {
  sidenavOpen: false,
  helmetTitle: '',
}

export default function layoutReducer (state = initialState, action) {
  switch (action.type) {
    case types.OPEN_SIDE_NAV:
      return {
        ...state,
        sidenavOpen: true,
      }

    case types.CLOSE_SIDE_NAV:
      return {
        ...state,
        sidenavOpen: false,
      }

    case types.SET_HELMET_TITLE:
      return {
        ...state,
        helmetTitle: action.helmetTitle,
      }

    default:
      return state
  }
}
