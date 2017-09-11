import { connect } from 'react-redux'

import * as layoutActions from '../../actions/layoutActions'
import AddStopComponent from '../../components/AddStop/AddStop'

const mapStateToProps = (state) => {
  return {
    open: state.layout.addStopOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => {
      dispatch(layoutActions.closeAddStopDialog())
    },
    handleAdd: (path, text, icon) => {
      dispatch(layoutActions.AddStop(path, text, icon))
      dispatch(layoutActions.closeAddStopDialog())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStopComponent)
