import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as layoutActions from '../../actions/layoutActions'
import FourOhFour from '../../components/404/404.js'

function mapStateToProps (state) {
  return {
    helmetTitle: state.layout.helmetTitle,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    layoutActions: bindActionCreators(layoutActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FourOhFour)
