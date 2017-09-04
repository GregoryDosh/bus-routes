import AppBar from 'material-ui/AppBar'
import CloseIcon from 'material-ui-icons/Close'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import { Link } from 'react-router-dom'

import './Sidenav.scss'

const Sidenav = ({ open, handleClose, routes }) => (
  <div>
    <Drawer
      open={open}
      onRequestClose={handleClose}
      onClick={handleClose}
      className="sidenav"
    >
      <div className="sidenav-header">
        <AppBar>
          <Toolbar>
            <IconButton onClick={handleClose} color="contrast" aria-label="Close">
              <CloseIcon />
            </IconButton>
            Close
          </Toolbar>
        </AppBar>
      </div>
      <div className="sidenav-content">
        <List>
          { routes.map((route, n) => (
            <Link key={n} to={route.path} tabIndex={-1}>
              <ListItem button>
                {route.icon &&
                  <ListItemIcon>
                    {route.icon}
                  </ListItemIcon>
                }
                <ListItemText primary={route.name} />
              </ListItem>
            </Link>
          ))
          }
        </List>
      </div>
    </Drawer>
  </div>
)

Sidenav.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}

Sidenav.defaultProps = {
  open: false,
  handleClose: () => {},
  routes: [],
}

export default Sidenav
