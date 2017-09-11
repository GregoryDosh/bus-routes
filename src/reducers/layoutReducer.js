import * as types from '../actions/actionTypes'

const initialState = {
  sideNavOpen: false,
  addStopOpen: false,
  helmetTitle: '',
  routes: [],
}

export default function layoutReducer (state = initialState, action) {
  switch (action.type) {
    case types.OPEN_SIDE_NAV:
      return {
        ...state,
        sideNavOpen: true,
      }

    case types.CLOSE_SIDE_NAV:
      return {
        ...state,
        sideNavOpen: false,
      }

    case types.OPEN_ADD_STOP_DIALOG:
      return {
        ...state,
        addStopOpen: true,
      }

    case types.CLOSE_ADD_STOP_DIALOG:
      return {
        ...state,
        addStopOpen: false,
      }

    case types.SET_HELMET_TITLE:
      return {
        ...state,
        helmetTitle: action.helmetTitle,
      }

    case types.ADD_STOP:
      return {
        ...state,
        routes: [
          ...state.routes,
          {
            path: action.path,
            name: action.name,
            icon: action.icon,
          },
        ],
      }

    default:
      return state
  }
}
