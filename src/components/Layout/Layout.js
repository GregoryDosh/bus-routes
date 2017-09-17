import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Helmet } from 'react-helmet'
import { renderRoutes } from 'react-router-config'
import { withStyles } from 'material-ui/styles'

import SideNav from '../../containers/SideNav/SideNav.js'
import AddStop from '../../containers/AddStop/AddStop.js'

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  header: {
    height: '64px',
  },
  body: {
    paddingTop: '64px',
  },
})

const Layout = ({ layoutActions, helmetTitle, route, classes }) => (
  <div className={classes.root}>
    <Helmet
      defaultTitle="Bus Routes"
      titleTemplate="%s - Bus Routes"
    />
    <div className={classes.header}>
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
    <div className={classes.body}>
      {renderRoutes(route.routes)}
    </div>
  </div>
)

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  helmetTitle: PropTypes.string,
  layoutActions: PropTypes.shape({
    openSideNav: PropTypes.func,
  }),
}

Layout.defaultProps = {
  classes: {},
  helmetTitle: undefined,
  layoutActions: {
    sidenav: () => {},
  },
  route: {
    routes: [],
  },
}

export default withStyles(styles)(Layout)
