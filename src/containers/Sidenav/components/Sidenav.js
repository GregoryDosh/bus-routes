import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List from 'material-ui/List'
import CloseIcon from 'material-ui-icons/Close'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import { Link } from 'react-router-dom'

import './Sidenav.scss'

const SideNav = ({ open, handleClose }) => (
  <div>
    <Drawer
      open={open}
      onRequestClose={handleClose}
      onClick={handleClose}
      className="sidenav"
    >
      <List style={{paddingTop: '64px'}}>
        <AppBar>
          <Toolbar>
            <IconButton onClick={handleClose} color="contrast" aria-label="Close">
              <CloseIcon />
            </IconButton>
            Close
          </Toolbar>
        </AppBar>
        <Link to="/route/1" tabIndex={-1}>
          <Button tabIndex={0}>Stop #1</Button>
        </Link>
        <Link to="/route/2" tabIndex={-1}>
          <Button tabIndex={0}>Stop #2</Button>
        </Link>
        <Divider />
        <Link to="/route/3" tabIndex={-1}>
          <Button tabIndex={0}>Stop #3</Button>
        </Link>
        <Link to="/route/4" tabIndex={-1}>
          <Button tabIndex={0}>Stop #4</Button>
        </Link>
      </List>
    </Drawer>
  </div>
)

export default SideNav
