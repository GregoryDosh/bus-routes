/* eslint-disable no-console */
import * as types from './actionTypes'
import api from '../config/apiConfig'
import axios from 'axios'
import moment from 'moment'

const returnName = /resultHeader">(.*?)<\/span>/

const setStopDescription = (stop, description) => {
  return {
    type: types.SET_STOP_DESCRIPTION,
    number: stop,
    description,
  }
}

const setStopBusses = (stop, busses) => {
  return {
    type: types.SET_STOP_BUSSES,
    number: stop,
    busses,
  }
}

export const getStopDescription = (stop) => {
  return function (dispatch) {
    return axios({
      url: api.stop.descriptionHost(stop),
      method: 'GET',
    })
      .then(response => {
        const possibleMatch = returnName.exec(response.data)
        if (possibleMatch && possibleMatch.length > 1) {
          return dispatch(setStopDescription(stop, possibleMatch[1]))
        } else {
          return dispatch(setStopDescription(stop, `Unknown Stop`))
        }
      }).catch(error => {
        console.error(error)
      })
  }
}

const busTimeParse = (timeString) => {
  return moment(parseInt(timeString.substring(6, 19)))
}

const titleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}

export const getStopBusses = (stop) => {
  return function (dispatch) {
    return axios({
      url: api.stop.bussesHost(stop),
      method: 'GET',
    })
      .then(response => {
        let busses = []
        for (let bus of response.data.sort((a, b) => a.DepartureTime < b.DepartureTime ? -1 : 1)) {
          const departureTime = busTimeParse(bus.DepartureTime)
          busses.push({
            departureText: departureTime.fromNow(),
            departureTime: departureTime.format('h:mm a'),
            description: bus.Description,
            direction: titleCase(bus.RouteDirection),
            location: bus.Actual ? `${bus.VehicleLatitude},${bus.VehicleLongitude}` : '',
            route: `${bus.Route}${bus.Terminal}`,
          })
        }
        return dispatch(setStopBusses(stop, busses))
      }).catch(error => {
        console.error(error)
      })
  }
}
