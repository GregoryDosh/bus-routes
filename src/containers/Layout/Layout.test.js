import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from '../../store/configureStore'
import Layout from './Layout'

describe('Layout component', () => {
  const store = configureStore()

  it('renders', () => {
    const tree = shallow(
      <Provider store={store}>
        <Layout />
      </Provider>, document.createElement('div')
    )
    expect(tree).toHaveLength(1)
  })
})
