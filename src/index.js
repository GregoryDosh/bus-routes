import 'babel-polyfill'
import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'
import './index.scss'

const store = configureStore()
const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const UpdatedApp = require('./containers/App').default
    ReactDOM.render(
      <Provider store={store}>
        <UpdatedApp />
      </Provider>, rootElement)
  })
}
