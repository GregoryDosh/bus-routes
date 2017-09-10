import merge from 'lodash/merge'

const baseConfig = {
  stop: {
    descriptionHost: (stopInt) => {
      // return `//localhost/stop=${stopInt}`
      return `https://www.metrotransit.org/nextrip/${stopInt}`
    },
    bussesHost: (stopInt) => {
      return `//svc.metrotransit.org/NexTrip/${stopInt}?format=json`
    },
  },
  googleMapsAPIKey: 'AIzaSyC3XH68CcTNbGGsxnHBCowhW2OaV_ITF2g',
}

const environmentConfigs = {
  development: {
  },
  production: {
    stop: {
      descriptionHost: (stopInt) => {
        return `https://www.metrotransit.org/nextrip/${stopInt}`
      },
    },
  },
}

const currentConfig = environmentConfigs[process.env.NODE_ENV]

export default merge(baseConfig, currentConfig)
