import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

import * as layoutActions from '../../actions/layoutActions'

class FourOhFour extends React.Component {
  componentWillMount () {
    this.props.layoutActions.setHelmetTitle(`Error 404: ${this.props.location.pathname}`)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      nextProps.layoutActions.setHelmetTitle(`Error 404: ${nextProps.location.pathname}`)
    }
  }

  componentWillUnmount () {
    this.props.layoutActions.setHelmetTitle()
  }

  render () {
    return (
      <div>
        <Helmet title={this.props.helmetTitle} />
        <div>
          <h1>404</h1>
          <h2>Path {this.props.location.pathname} Not Found</h2>
          {this.props.match.params.routeID}
        </div>
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

FourOhFour.propTypes = {
  layoutActions: PropTypes.shape({
    setHelmetTitle: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(FourOhFour)
