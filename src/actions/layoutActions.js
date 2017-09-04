import * as types from './actionTypes'

export function openSidenav () {
  return {
    type: types.OPEN_SIDE_NAV,
  }
}

export function closeSidenav () {
  return {
    type: types.CLOSE_SIDE_NAV,
  }
}

export function setHelmetTitle (helmetTitle) {
  return {
    type: types.SET_HELMET_TITLE,
    helmetTitle,
  }
}
