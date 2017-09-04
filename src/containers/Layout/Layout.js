import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'

import * as layoutActions from '../../actions/layoutActions'
import FourOhFour from '../404/404'
import Sidenav from '../Sidenav/containers/Sidenav'

export class Layout extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          defaultTitle="Bus Routes"
          titleTemplate="%s - Bus Routes"
        />
        <div>
          <AppBar>
            <Toolbar>
              <IconButton onClick={this.props.layoutActions.openSidenav} color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit">
                {this.props.helmetTitle}
              </Typography>
            </Toolbar>
          </AppBar>
          <Sidenav />
        </div>
        <Switch>
          {
            <Route path="/route/:routeID?" component={FourOhFour} />
          }
          <Route component={FourOhFour} />
        </Switch>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    layoutActions: bindActionCreators(layoutActions, dispatch),
  }
}

function mapStateToProps (state) {
  return {
    helmetTitle: state.layout.helmetTitle,
  }
}

Layout.propTypes = {
  helmetTitle: PropTypes.string,
  layoutActions: PropTypes.shape({
    openSidenav: PropTypes.func,
  }),
}

Layout.defaultProps = {
  helmetTitle: undefined,
  layoutActions: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
