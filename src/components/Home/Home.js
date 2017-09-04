import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import { Helmet } from 'react-helmet'

import './Home.scss'

class Home extends React.Component {
  componentWillMount () {
    this.props.layoutActions.setHelmetTitle('Home')
  }

  componentWillUnmount () {
    this.props.layoutActions.setHelmetTitle()
  }

  render () {
    return (
      <div className="Home">
        <Helmet title={this.props.helmetTitle} />
        <div className="Home-Paper">
          <Paper className="Home-Message" elevation={5}>
            <Typography type="display4" component="h1">
              Welcome!
            </Typography>
            <Typography type="subheading">
              Select a Bus Stop from the menu.
            </Typography>
          </Paper>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  layoutActions: PropTypes.shape({
    setHelmetTitle: PropTypes.func.isRequired,
  }).isRequired,
}

export default Home
