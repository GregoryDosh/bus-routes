import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from '../../store/configureStore'
import Sidenav from './Sidenav'

describe('Sidenav component', () => {
  const store = configureStore()

  it('renders', () => {
    const tree = shallow(
      <Provider store={store}>
        <Sidenav />
      </Provider>, document.createElement('div')
    )
    expect(tree).toHaveLength(1)
  })
})
