// import a11y from 'react-a11y'
import React from 'react'
// import ReactDOM from 'react-dom'
import { purple, green } from 'material-ui/colors'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import defaultTheme from 'material-ui/styles/theme'

import Layout from './Layout/Layout'

// if (process.env.NODE_ENV === 'development') {
//   a11y(React, {
//     ReactDOM: ReactDOM,
//     includeSrcNode: true,
//   })
// }

let muiTheme = createMuiTheme({
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
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App
