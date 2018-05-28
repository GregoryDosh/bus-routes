import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import PropTypes from 'prop-types'
import React from 'react'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'

import BusEast from '../../images/bus-eastbound.svg'
import BusWest from '../../images/bus-westbound.svg'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  iconField: {
    margin: theme.spacing.unit,
    '& div': {
      width: 200,
      height: 200,
    },
  },
  iconListView: {
    '& li': {
      width: 200,
      height: 200,
    },
  },
})

const iconOptions = [
  BusEast,
  BusWest,
]

class AddStop extends React.Component {
  state = {
    stop: '',
    name: '',
    icon: '',
  }

  resetState = () => {
    this.setState({
      stop: '',
      name: '',
      icon: '',
    })
  }

  updateStop = (stop) => {
    this.setState({
      ...this.state,
      stop,
    })
  }

  updateName = (name) => {
    this.setState({
      ...this.state,
      name,
    })
  }

  updateIcon = (icon) => {
    this.setState({
      ...this.state,
      icon,
    })
  }
  /* eslint-disable no-console */
  render () {
    const { classes, open, handleClose, handleAdd } = this.props
    return (
      <Dialog onClose={() => {
        handleClose()
        this.resetState()
      }} open={open}>
        <DialogContent>
          <Typography variant="display1">
            Add New Stop
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              required
              id="stop"
              label="Stop Number"
              className={classes.textField}
              placeholder="17860"
              margin="normal"
              value={this.state.stop}
              onChange={(event) => this.updateStop(event.target.value)}
            />
            <TextField
              required
              id="description"
              label="Stop Description"
              className={classes.textField}
              placeholder="4th St. & Nicollet Mall"
              margin="normal"
              value={this.state.name}
              onChange={(event) => this.updateName(event.target.value)}
            />
            <InputLabel htmlFor="icon">Icon</InputLabel>
            <Select
              value={this.state.icon}
              onChange={(event) => this.updateIcon(event.target.value)}
              input={<Input id="icon" />}
              className={classes.iconField}
              MenuProps={{
                MenuListProps: {
                  className: classes.iconListView,
                },
              }}
            >
              {iconOptions.map(icon => (
                <MenuItem
                  key={icon}
                  value={icon}
                >
                  <img alt="" src={icon} />
                </MenuItem>
              ))}
            </Select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            handleAdd(this.state.stop, this.state.name, this.state.icon)
            this.resetState()
          }} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

AddStop.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
}

AddStop.defaultProps = {
  classes: {},
  open: false,
  handleClose: () => {},
  handleAdd: () => {},
}

export default withStyles(styles)(AddStop)
