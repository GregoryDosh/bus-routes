import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import { Helmet } from 'react-helmet'
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
  root: {
    backgroundColor: '#AAA',
    height: '100vh',
    width: '100vw',
  },
  paper: {
    width: 'auto',
    maxWidth: '500px',
    margin: '0 auto',
    paddingTop: '50px',
  },
  message: {
    padding: '20px',
    wordWrap: 'break-word',
  },
})

class Home extends React.Component {
  componentWillMount () {
    this.props.layoutActions.setHelmetTitle('Home')
  }

  componentWillUnmount () {
    this.props.layoutActions.setHelmetTitle()
  }

  render () {
    const { classes, helmetTitle } = this.props
    return (
      <div className={classes.root}>
        <Helmet title={helmetTitle} />
        <div className={classes.paper}>
          <Paper className={classes.message} elevation={5}>
            <Typography type="display4" component="h1">
              Welcome!
            </Typography>
            <Typography type="subheading">
              Select or add a new bus stop from the menu.
            </Typography>
          </Paper>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  helmetTitle: PropTypes.string.isRequired,
  layoutActions: PropTypes.shape({
    setHelmetTitle: PropTypes.func.isRequired,
  }).isRequired,
}

Home.defaultProps = {
  classes: {},
  helmetTitle: 'Home',
  layoutActions: {
    setHelmetTitle: () => {},
  },
}

export default withStyles(styles)(Home)
