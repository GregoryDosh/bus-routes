import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card'
import PropTypes from 'prop-types'
import React from 'react'

import eastBus from '../../images/bus-eastbound.svg'
import westBus from '../../images/bus-westbound.svg'
import apiConfig from '../../config/apiConfig'
import './Bus.scss'

import { stringHSLColorHash } from '../../services/colorService'

const Bus = ({departureText, departureTime, description, direction, location, route}) => {
  let busImage
  let markerColor
  if (location.length > 0 && apiConfig.googleMapsAPIKey.length > 0) {
    if (direction === 'Eastbound') {
      markerColor = 'blue'
    } else {
      markerColor = 'red'
    }
    busImage = `http://maps.googleapis.com/maps/api/staticmap?size=400x350&maptype=roadmap&zoom=15&center=${location}&markers=color:${markerColor}|${location}&key=${apiConfig.googleMapsAPIKey}`
  } else {
    if (direction === 'Eastbound') {
      busImage = eastBus
    } else {
      busImage = westBus
    }
  }

  return (
    <Card className="bus" raised>
      <CardHeader
        title={
          <Typography type="display1">
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
        className="busMedia"
        image={busImage}
        title={`${route} - ${direction}`}
      />
      <CardContent>
        <Typography type="title" align="center">
          Departing {departureText}. {departureTime}
        </Typography>
      </CardContent>
    </Card>
  )
}

Bus.propTypes = {
  departureText: PropTypes.string.isRequired,
  departureTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  gmapsAPIKey: PropTypes.string,
}

Bus.defaultProps = {
  departureText: '',
  departureTime: '',
  description: '',
  location: '',
  route: '',
  gmapsAPIKey: '',
}

export default Bus
