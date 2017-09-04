import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from '../../store/configureStore'
import FourOhFour from './404'

describe('404 Page component', () => {
  const store = configureStore()

  it('renders', () => {
    shallow(<Provider store={store}>
      <FourOhFour />
    </Provider>)
  })
})
