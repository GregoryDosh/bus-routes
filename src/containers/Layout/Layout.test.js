import React from 'react'
import { shallow } from 'enzyme'

import { Layout } from './Layout'

describe('Layout component', () => {
  it('renders', () => {
    const layout = shallow(
      <Layout />
    )
    expect(layout).toHaveLength(1)
  })
})
