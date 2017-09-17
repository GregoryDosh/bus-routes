import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import { Helmet } from 'react-helmet'

import Bus from '../Bus/Bus'

class Stop extends React.Component {
  componentWillMount () {
    this.props.layoutActions.setHelmetTitle(`${this.props.stop.description} - ${this.props.stop.number}`)
    this.props.stopActions.getStopDescription(this.props.stop.number)
    this.props.stopActions.getStopBusses(this.props.stop.number)
  }

  componentWillUnmount () {
    this.props.layoutActions.setHelmetTitle()
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.props.stop.description !== nextProps.stop.description) {
      this.props.layoutActions.setHelmetTitle(`${nextProps.stop.description} - ${nextProps.stop.number}`)
    }

    if (this.props.stop.number !== nextProps.stop.number) {
      this.props.stopActions.getStopDescription(nextProps.stop.number)
      this.props.stopActions.getStopBusses(nextProps.stop.number)
    }
  }

  render () {
    return (
      <div>
        <Helmet title={this.props.helmetTitle} />
        <Typography type="display2" align="center" gutterBottom>
          {this.props.stop.description}
        </Typography>
        <Grid
          container
          justify="space-around"
        >
          { this.props.stop.busses.length > 0 &&
          this.props.stop.busses.map((r, n) => {
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
  helmetTitle: PropTypes.string.isRequired,
  layoutActions: PropTypes.shape({
    setHelmetTitle: PropTypes.func.isRequired,
  }).isRequired,
  stopActions: PropTypes.shape({
    getStopDescription: PropTypes.func.isRequired,
    getStopBusses: PropTypes.func.isRequired,
  }).isRequired,
  stop: PropTypes.shape({
    description: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    busses: PropTypes.arrayOf(PropTypes.shape({
      departureText: PropTypes.string.isRequired,
      departureTime: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })),
  }).isRequired,
}

Stop.defaultProps = {
  helmetTitle: '',
  layoutActions: {
    setHelmetTitle: () => {},
  },
  stopActions: {
    getStopDescription: () => {},
    getStopBusses: () => {},
  },
  stop: {
    description: 'Stop',
    number: 0,
    busses: [],
  },
}

export default Stop
