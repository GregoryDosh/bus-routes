import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import eastBus from '../../images/bus-eastbound.svg'
import westBus from '../../images/bus-westbound.svg'
import { stringHSLColorHash } from '../../services/colorService'

const styles = (theme) => ({
  root: {
    width: '415px',
    maxHeight: '525px',
    '& > div > div > span > h1': {
      maxWidth: '300px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    '&:active, &:hover': {
      '& > div > div > span > h1': {
        maxWidth: '300px',
        lineHeight: '32px',
        overflow: 'visible',
        whiteSpace: 'normal',
        position: 'absolute',
        backgroundColor: '#FFF',
        border: 'grey',
        borderRadius: '15px',
        borderStyle: 'outset',
        marginTop: '1px',
        marginLeft: '-3px',
      },
      '& > div > div > span:nth-child(2)': {
        marginTop: '40px',
      },
    },
  },
  media: {
    backgroundPosition: 'center center',
    height: '350px',
    width: '415px',
    backgroundSize: 'auto',
    borderRadius: '50px',
    border: 'none',
  },
})

const Bus = ({departureText, departureTime, description, direction, map, route, classes}) => {
  let busImage
  if (map !== '') {
    busImage = `//${map}`
  } else {
    if (direction === 'Eastbound') {
      busImage = eastBus
    } else {
      busImage = westBus
    }
  }

  return (
    <Card className={classes.root} raised>
      <CardHeader
        title={
          <Typography variant="display1">
            {description}
          </Typography>
        }
        subheader={`${route} - ${direction}`}
        avatar={
          <Avatar style={{
            height: 64,
            width: 64,
            backgroundColor: `hsl(${stringHSLColorHash(route)}, 100%, 33%)`,
            fontSize: route.length > 2 ? 28 : 32,
            cursor: 'default',
          }}
          >
            {route}
          </Avatar>
        }
      />
      <CardMedia
        className={classes.media}
        image={busImage}
        title={`${route} - ${direction}`}
      />
      <CardContent>
        <Typography variant="title" align="center">
          Departing {departureText}. {departureTime}
        </Typography>
      </CardContent>
    </Card>
  )
}

Bus.propTypes = {
  classes: PropTypes.object.isRequired,
  departureText: PropTypes.string.isRequired,
  departureTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

Bus.defaultProps = {
  classes: {},
  departureText: 'unknown',
  departureTime: '',
  description: 'Unknown',
  direction: 'Eastbound',
  map: '',
  route: '1A',
}

export default withStyles(styles)(Bus)
