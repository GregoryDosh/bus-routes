import * as types from './actionTypes'
import api from '../config/apiConfig'
import axios from 'axios'

const returnName = /resultHeader">(.*?)<\/span>/

const stopDescription = (stop, description) => {
  return {
    type: types.SET_STOP_DESCRIPTION,
    number: stop,
    description,
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
          return dispatch(stopDescription(stop, possibleMatch[1]))
        } else {
          return dispatch(stopDescription(stop, `Unknown Stop`))
        }
      }).catch(error => {
        /* eslint-disable no-console */
        console.error(error)
        return dispatch(stopDescription(stop, `Unknown Stop`))
      })
  }
}
