import AppBar from 'material-ui/AppBar'
import CloseIcon from 'material-ui-icons/Close'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import HomeIcon from 'material-ui-icons/Home'
import NewIcon from 'material-ui-icons/Place'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
  content: {
    '& a:link': {
      textDecoration: 'none',
    },
  },
  header: {
    height: '64px',
  },
})

const SideNav = ({ open, handleClose, handleAddStopClick, routes, classes }) => (
  <div>
    <Drawer
      open={open}
      onRequestClose={handleClose}
      onClick={handleClose}
    >
      <div className={classes.header}>
        <AppBar>
          <Toolbar>
            <IconButton onClick={handleClose} color="contrast" aria-label="Close">
              <CloseIcon />
            </IconButton>
            Close
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.content}>
        <List>
          <Link to="/" tabIndex={-1}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          { routes.map((route, n) => (
            <Link key={n} to={route.path} tabIndex={-1}>
              <ListItem button>
                {route.icon &&
                  <ListItemIcon>
                    {
                      typeof route.icon === 'string' ? <img alt="" src={route.icon} />
                        : route.icon
                    }
                  </ListItemIcon>
                }
                <ListItemText primary={route.name} />
              </ListItem>
            </Link>
          ))
          }
          <ListItem button onClick={handleAddStopClick}>
            <ListItemIcon>
              <NewIcon />
            </ListItemIcon>
            <ListItemText primary="Add Stop" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  </div>
)

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAddStopClick: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
  })).isRequired,
}

SideNav.defaultProps = {
  classes: {},
  open: false,
  handleClose: () => {},
  handleAddStopClick: () => {},
  routes: [],
}

export default withStyles(styles)(SideNav)
