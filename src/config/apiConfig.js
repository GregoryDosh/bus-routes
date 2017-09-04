import merge from 'lodash/merge'

const baseConfig = {
  graphql: {
    host: '//localhost:5000/graphql',
  },
  googleMaps: "AIzaSyC3XH68CcTNbGGsxnHBCowhW2OaV_ITF2g",
}

const environmentConfigs = {
  development: {
    graphql: {
      host: '//localhost:5000/graphql',
    },
  },
  production: {
    graphql: {
      host: '//localhost:5000/graphql',
    },
  },
}

const currentConfig = environmentConfigs[process.env.NODE_ENV]

export default merge(baseConfig, currentConfig)
