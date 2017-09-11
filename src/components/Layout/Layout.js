import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Helmet } from 'react-helmet'
import { renderRoutes } from 'react-router-config'

import SideNav from '../../containers/SideNav/SideNav.js'
import AddStop from '../../containers/AddStop/AddStop.js'
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
          <IconButton onClick={layoutActions.openSideNav} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" style={{flex: '1'}}>
            {helmetTitle}
          </Typography>
          { false &&
            <IconButton onClick={layoutActions.openSideNav} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          }
        </Toolbar>
      </AppBar>
      <SideNav />
      <AddStop />
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
    openSideNav: PropTypes.func,
  }),
}

Layout.defaultProps = {
  helmetTitle: undefined,
  layoutActions: {
    sidenav: () => {},
  },
  route: {
    routes: [],
  },
}

export default Layout
