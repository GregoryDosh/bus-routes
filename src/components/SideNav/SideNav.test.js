import React from 'react'
import { shallow } from 'enzyme'

import SideNav from './SideNav'

describe('SideNav component', () => {
  it('renders', () => {
    const exampleProps = {
    }

    const tree = shallow(
      <SideNav {...exampleProps} />
    )
    expect(tree).toHaveLength(1)
  })
})
