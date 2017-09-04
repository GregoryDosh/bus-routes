import { connect } from 'react-redux'

import SidenavComponent from '../components/Sidenav'
import { closeSidenav } from '../../../actions/layoutActions'

const mapStateToProps = (state) => {
  return {
    open: state.layout.sidenavOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => {
      dispatch(closeSidenav())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidenavComponent)
