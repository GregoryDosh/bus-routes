/* eslint-disable no-console */
import * as types from './actionTypes'
import api from '../config/apiConfig'
import axios from 'axios'
import moment from 'moment'

const setStopDescription = (stop, description) => {
  return {
    type: types.SET_STOP_DESCRIPTION,
    number: stop,
    description,
  }
}

const setStopBusses = (stop, busses, refreshTime) => {
  return {
    type: types.SET_STOP_BUSSES,
    number: stop,
    busses,
    refreshTime,
  }
}

export const getStopInformation = (stop) => {
  return function (dispatch) {
    return axios({
      url: api.departures.API(stop),
      method: 'GET',
    })
      .then(response => {
        let stop = response.data.data.departures
        dispatch(setStopDescription(stop, stop.stop_details.name))
        let busses = []
        for (let bus of stop.departures) {
          const departureTime = moment(bus.departure_time)
          busses.push({
            departureText: departureTime.fromNow(),
            departureTime: departureTime.format('h:mm a'),
            description: bus.description,
            direction: titleCase(bus.route_direction),
            map: departureTime.diff(moment.now(), 'minutes') <= 30 ? bus.map : '',
            route: `${bus.route}${bus.terminal}`,
          })
        }
        dispatch(setStopBusses(stop, busses, moment().format('dddd, MMMM Do YYYY, h:mm:ss a').toString()))
      }).catch(error => {
        console.error(error)
        dispatch(setStopDescription(stop, `Unknown Stop ${stop}`))
      })
  }
}

const titleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}
