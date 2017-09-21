import * as types from '../actions/actionTypes'
import moment from 'moment'

const initialState = () => ({
  description: 'Stop',
  number: 0,
  busses: [],
  refreshTime: moment().toString(),
})

export default function stopReducer (state = initialState(), action) {
  switch (action.type) {
    case types.SET_STOP_DESCRIPTION:
      return {
        ...state,
        description: action.description,
        number: typeof action.number === 'string' ? parseInt(action.number) || 0 : action.number,
      }
    case types.SET_STOP_BUSSES:
      return {
        ...state,
        busses: action.busses,
        refreshTime: action.refreshTime,
      }

    default:
      return state
  }
}
