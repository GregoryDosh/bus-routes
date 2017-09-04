import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import configureStore from '../../store/configureStore'
import Home from './Home'

describe('Home Page component', () => {
  const store = configureStore()

  it('renders', () => {
    shallow(<Provider store={store}>
      <Home />
    </Provider>)
  })
})
