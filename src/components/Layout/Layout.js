import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Helmet } from 'react-helmet'
import { renderRoutes } from 'react-router-config'

import Sidenav from '../../containers/Sidenav/Sidenav.js'
import './Layout.scss'

const Layout = ({ layoutActions, helmetTitle, route }) => (
  <div className="app">
    <Helmet
      defaultTitle="Bus Routes"
      titleTemplate="%s - Bus Routes"
    />
    <div className="appHeader">
      <AppBar>
        <Toolbar>
          <IconButton onClick={layoutActions.openSidenav} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            {helmetTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidenav />
    </div>
    <div className="appBody">
      {renderRoutes(route.routes)}
    </div>
  </div>
)

Layout.propTypes = {
  route: PropTypes.object.isRequired,
  helmetTitle: PropTypes.string,
  layoutActions: PropTypes.shape({
    openSidenav: PropTypes.func,
  }),
}

Layout.defaultProps = {
  helmetTitle: undefined,
  layoutActions: {},
}

export default Layout
