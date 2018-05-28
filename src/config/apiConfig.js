import merge from 'lodash/merge'

const baseConfig = {
  departures: {
    API: (stopInt) => {
      return ''
    },
  },
}

const environmentConfigs = {
  development: {
    departures: {
      API: (stopInt) => {
        return `http://localhost:1234/graphql?&query={departures(stop_id:${stopInt}, map_width:400, map_height:350){stop_id, full_map, update_time, stop_details{ name }, departures{ departure_time, description, route_direction, route, terminal, map }}}`
      },
    },
  },
  production: {
    departures: {
      API: (stopInt) => {
        return `https://nextrip.auengun.net/graphql?&query={departures(stop_id:${stopInt}, map_width:400, map_height:350){stop_id, full_map, update_time, stop_details{ name }, departures{ departure_time, description, route_direction, route, terminal, map }}}`
      },
    },
  },
}

const currentConfig = environmentConfigs[process.env.NODE_ENV]

export default merge(baseConfig, currentConfig)
