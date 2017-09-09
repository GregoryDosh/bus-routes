import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import { Helmet } from 'react-helmet'

import './Stop.scss'

class Stop extends React.Component {
  componentWillMount () {
    this.props.layoutActions.setHelmetTitle(`${this.props.stop.description} - ${this.props.stop.number}`)
    this.props.stopActions.getStopDescription(this.props.stop.number)
  }

  componentWillUnmount () {
    this.props.layoutActions.setHelmetTitle()
  }

  componentWillUpdate (nextProps, nextState) {
    this.props.layoutActions.setHelmetTitle(`${nextProps.stop.description} - ${nextProps.stop.number}`)
  }

  render () {
    return (
      <div className="Stop">
        <Helmet title={this.props.helmetTitle} />
        <div className="Stop-Paper">
          <Paper className="Stop-Message" elevation={5}>
            <Typography type="display2" component="h1">
              {this.props.stop.description}
            </Typography>
            <Typography type="subheading">
              Stop: {this.props.stop.number}
            </Typography>
          </Paper>
        </div>
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
  }).isRequired,
  stop: PropTypes.shape({
    description: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
}

Stop.defaultProps = {
  helmetTitle: '',
  layoutActions: {
    setHelmetTitle: () => {},
  },
  stopActions: {
    getStopDescription: () => {},
  },
  stop: {
    description: 'Stop',
    number: 0,
  },
}

export default Stop
