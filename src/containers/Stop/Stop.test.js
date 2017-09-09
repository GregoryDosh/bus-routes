import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import configureStore from '../../store/configureStore'
import Stop from './Stop'

describe('Stop Page component', () => {
  const store = configureStore()

  it('renders', () => {
    shallow(<Provider store={store}>
      <Stop />
    </Provider>)
  })
})
