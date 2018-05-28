import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'
import Button from '@material-ui/core/Button'
import RefreshIcon from '@material-ui/icons/Refresh'

import Bus from '../Bus/Bus'

const styles = (theme) => ({
  header: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    right: 0,
    zIndex: 9999,
  },
})

class Stop extends React.Component {
  componentWillMount () {
    this.props.layoutActions.setHelmetTitle(`${this.props.stop.description} - ${this.props.stop.number}`)
    this.props.stopActions.getStopInformation(this.props.stop.number)
  }

  componentWillUnmount () {
    this.props.layoutActions.setHelmetTitle()
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.props.stop.description !== nextProps.stop.description) {
      this.props.layoutActions.setHelmetTitle(`${nextProps.stop.description} - ${nextProps.stop.number}`)
    }

    if (this.props.stop.number !== nextProps.stop.number) {
      this.props.stopActions.getStopInformation(nextProps.stop.number)
    }
  }

  render () {
    const { classes, helmetTitle, stopActions, stop } = this.props
    return (
      <div style={{padding: '0px 16px'}}>
        <Button
          variant="fab"
          color="primary"
          className={classes.button}
          onClick={() => stopActions.getStopInformation(stop.number)}
        >
          <RefreshIcon />
        </Button>
        <Helmet title={helmetTitle} />
        <Typography variant="display2" align="center">
          {stop.description}
        </Typography>
        <Typography variant="subheading" align="center" gutterBottom>
          {stop.refreshTime}
        </Typography>
        <Grid
          container
          justify="space-around"
          spacing={16}
        >
          { stop.busses.length > 0 &&
          stop.busses.map((r, n) => {
            return (
              <Grid key={n} item>
                <Bus {...r} />
              </Grid>
            )
          })
          }
        </Grid>
      </div>
    )
  }
}

Stop.propTypes = {
  classes: PropTypes.object.isRequired,
  helmetTitle: PropTypes.string.isRequired,
  layoutActions: PropTypes.shape({
    setHelmetTitle: PropTypes.func.isRequired,
  }).isRequired,
  stopActions: PropTypes.shape({
    getStopInformation: PropTypes.func.isRequired,
  }).isRequired,
  stop: PropTypes.shape({
    description: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    refreshTime: PropTypes.string.isRequired,
    busses: PropTypes.arrayOf(PropTypes.shape({
      departureText: PropTypes.string.isRequired,
      departureTime: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
      map: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })),
  }).isRequired,
}

Stop.defaultProps = {
  classes: {},
  helmetTitle: '',
  layoutActions: {
    setHelmetTitle: () => {},
  },
  stopActions: {
    getStopInformation: () => {},
  },
  stop: {
    description: 'Stop',
    number: 0,
    busses: [],
    refreshTime: moment().format('dddd, MMMM Do YYYY, h:mm:ss a').toString(),
  },
}

export default withStyles(styles)(Stop)
