import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import { Helmet } from 'react-helmet'

import './404.scss'

class FourOhFour extends React.Component {
  componentWillMount () {
    this.props.layoutActions.setHelmetTitle(`HTTP 404 - Not Found`)
  }

  componentWillUnmount () {
    this.props.layoutActions.setHelmetTitle()
  }

  render () {
    return (
      <div className="FourOhFour">
        <Helmet title={this.props.helmetTitle} />
        <div className="FourOhFour-Paper">
          <Paper className="FourOhFour-Message" elevation={5}>
            <Typography type="display2" component="h1">
              HTTP 404 - Not Found
            </Typography>
            <Typography type="subheading">
              Couldn't find path: {this.props.location.pathname}
            </Typography>
          </Paper>
        </div>
      </div>
    )
  }
}

FourOhFour.propTypes = {
  layoutActions: PropTypes.shape({
    setHelmetTitle: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

FourOhFour.defaultProps = {
  layoutActions: {
    setHelmetTitle: () => {},
  },
  location: {
    pathname: '',
  },
}

export default FourOhFour
