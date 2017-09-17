import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import persistState from 'redux-localstorage'

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production'
  ? [ reduxImmutableStateInvariant(), thunk ]
  : [ thunk ]

const persistStatePaths = ['layout']

export default function configureStore () {
  if (process.env.NODE_ENV === 'test') {
    return createStore(
      rootReducer,
      applyMiddleware(...middleware)
    )
  }
  if (process.env.NODE_ENV !== 'production') {
    return createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(...middleware)
      ),
      persistState(persistStatePaths)
    )
  }
  return createStore(
    rootReducer,
    applyMiddleware(...middleware),
    persistState(persistStatePaths)
  )
}
