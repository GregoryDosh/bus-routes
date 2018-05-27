import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from '../../store/configureStore'
import SideNav from './SideNav'

describe('SideNav component', () => {
  const store = configureStore()

  it('renders', () => {
    const tree = shallow(
      <Provider store={store}>
        <SideNav />
      </Provider>, document.createElement('div')
    )
    expect(tree).toHaveLength(1)
  })
})
