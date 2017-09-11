import * as types from './actionTypes'

export function openSideNav () {
  return {
    type: types.OPEN_SIDE_NAV,
  }
}

export function closeSideNav () {
  return {
    type: types.CLOSE_SIDE_NAV,
  }
}

export function openAddStopDialog () {
  return {
    type: types.OPEN_ADD_STOP_DIALOG,
  }
}

export function closeAddStopDialog () {
  return {
    type: types.CLOSE_ADD_STOP_DIALOG,
  }
}

export function AddStop (stop, name, icon) {
  return {
    type: types.ADD_STOP,
    path: `/stop/${stop}`,
    name,
    icon,
  }
}

export function setHelmetTitle (helmetTitle) {
  return {
    type: types.SET_HELMET_TITLE,
    helmetTitle,
  }
}
