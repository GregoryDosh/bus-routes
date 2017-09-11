import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from '../../store/configureStore'
import AddStop from './AddStop'

describe('AddStop component', () => {
  const store = configureStore()

  it('renders', () => {
    const tree = shallow(
      <Provider store={store}>
        <AddStop />
      </Provider>, document.createElement('div')
    )
    expect(tree).toHaveLength(1)
  })
})
