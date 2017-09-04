import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production'
  ? [ reduxImmutableStateInvariant(), createLogger(), thunk ]
  : [ thunk ]

export default function configureStore () {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(...middleware)
      )
    )
  }
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
}
