import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from '../../store/configureStore'
import Layout from './Layout'

describe('Layout component', () => {
  const store = configureStore()

  it('renders', () => {
    const layout = shallow(
      <Provider store={store}>
        <Layout />
      </Provider>, document.createElement('div')
    )
    expect(layout).toHaveLength(1)
  })
})
