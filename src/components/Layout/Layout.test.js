import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'

describe('Layout component', () => {
  it('renders', () => {
    const exampleProps = {
      route: {
        routes: [],
      },
    }

    const tree = shallow(
      <Layout {...exampleProps} />
    )
    expect(tree).toHaveLength(1)
  })
})
