import 'babel-polyfill'
import 'typeface-roboto'
import defaultTheme from 'material-ui/styles/theme'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Provider } from 'react-redux'
import { purple, green } from 'material-ui/colors'
import { renderRoutes } from 'react-router-config'

import configureStore from './store/configureStore'
import { routerConfig } from './config/routerConfig'
import './index.scss'

const store = configureStore()
const rootElement = document.getElementById('root')

const muiTheme = createMuiTheme({
  ...defaultTheme(),
  palette: {
    ...defaultTheme().palette,
    primary: purple,
    accent: green,
    type: 'dark',
  },
})

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <BrowserRouter basename="/bus-routes">
      {renderRoutes(routerConfig)}
    </BrowserRouter>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement
)
