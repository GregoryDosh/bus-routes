import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { purple, green } from '@material-ui/core/colors'
import { renderRoutes } from 'react-router-config'

import configureStore from './store/configureStore'
import { routerConfig } from './config/routerConfig'
import './index.scss'

const store = configureStore()
const rootElement = document.getElementById('root')

const muiTheme = createMuiTheme({
  palette: {
    primary: purple,
    accent: green,
    secondary: green,
  },
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter basename="/bus-routes">
        {renderRoutes(routerConfig)}
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>, rootElement
)
