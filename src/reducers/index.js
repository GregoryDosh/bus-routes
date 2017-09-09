import { combineReducers } from 'redux'
import layout from './layoutReducer'
import stop from './stopReducer'

const rootReducer = combineReducers({
  layout,
  stop,
})

export default rootReducer
