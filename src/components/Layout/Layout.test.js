import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'

describe('Layout component', () => {
  it('renders', () => {
    const exampleProps = {
    }

    const layout = shallow(
      <Layout {...exampleProps} />
    )
    expect(layout).toHaveLength(1)
  })
})
