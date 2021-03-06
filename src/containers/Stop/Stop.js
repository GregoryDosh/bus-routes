import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as layoutActions from '../../actions/layoutActions'
import * as stopActions from '../../actions/stopActions'
import Stop from '../../components/Stop/Stop'

function mapStateToProps (state) {
  return {
    helmetTitle: state.layout.helmetTitle,
    stop: state.stop,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    layoutActions: bindActionCreators(layoutActions, dispatch),
    stopActions: bindActionCreators(stopActions, dispatch),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  let stopNumber = ownProps.match.params.stop || stateProps.stop.number
  if (typeof stopNumber === 'string') {
    stopNumber = parseInt(stopNumber) || 0
  }

  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    stop: {
      ...stateProps.stop,
      number: stopNumber,
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Stop)
