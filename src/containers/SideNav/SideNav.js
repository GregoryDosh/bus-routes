import { connect } from 'react-redux'

import * as layoutActions from '../../actions/layoutActions'
import SideNavComponent from '../../components/SideNav/SideNav'

const mapStateToProps = (state) => {
  return {
    routes: state.layout.routes,
    open: state.layout.sideNavOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => {
      dispatch(layoutActions.closeSideNav())
    },
    handleAddStopClick: () => {
      dispatch(layoutActions.openAddStopDialog())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavComponent)
