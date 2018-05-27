import merge from 'lodash/merge'

const baseConfig = {
  departures: {
    departuresAPI: (stopInt) => {
      return ''
    },
  },
}

const environmentConfigs = {
  development: {
    departures: {
      departuresAPI: (stopInt) => {
        return `https://localhost/graphql?&query={departures(stop_id:${stopInt}, map_width:800, map_height:600, map_scale:2){stop_id, full_map, update_time, stop_details{name}}}`
      },
    },
  },
  production: {
    departures: {
      departuresAPI: (stopInt) => {
        return `https://nextrip.auengun.net/graphql?&query={departures(stop_id:${stopInt}, map_width:800, map_height:600, map_scale:2){stop_id, full_map, update_time, stop_details{name}}}`
      },
    },
  },
}

const currentConfig = environmentConfigs[process.env.NODE_ENV]

export default merge(baseConfig, currentConfig)
