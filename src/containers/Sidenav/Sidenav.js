import { connect } from 'react-redux'

import * as layoutActions from '../../actions/layoutActions'
import { sidenavConfig } from '../../config/routerConfig'
import SidenavComponent from '../../components/Sidenav/Sidenav.js'

const mapStateToProps = (state) => {
  return {
    routes: sidenavConfig,
    open: state.layout.sidenavOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => {
      dispatch(layoutActions.closeSidenav())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidenavComponent)
