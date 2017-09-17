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

class FourOhFour extends React.Component {
  componentWillMount () {
    this.props.layoutActions.setHelmetTitle('HTTP 404 - Not Found')
  }

  componentWillUnmount () {
    this.props.layoutActions.setHelmetTitle()
  }

  render () {
    const { classes, location } = this.props

    return (
      <div className={classes.root}>
        <Helmet title={this.props.helmetTitle} />
        <div className={classes.paper}>
          <Paper className={classes.message} elevation={5}>
            <Typography type="display2" component="h1">
              HTTP 404 - Not Found
            </Typography>
            <Typography type="subheading">
              Couldn't find path: {location.pathname}
            </Typography>
          </Paper>
        </div>
      </div>
    )
  }
}

FourOhFour.propTypes = {
  classes: PropTypes.object.isRequired,
  layoutActions: PropTypes.shape({
    setHelmetTitle: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

FourOhFour.defaultProps = {
  classes: {},
  layoutActions: {
    setHelmetTitle: () => {},
  },
  location: {
    pathname: '',
  },
}

export default withStyles(styles)(FourOhFour)
