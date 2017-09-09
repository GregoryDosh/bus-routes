import React from 'react'
import { shallow } from 'enzyme'

import Sidenav from './Sidenav'

describe('Sidenav component', () => {
  it('renders', () => {
    const exampleProps = {
    }

    const tree = shallow(
      <Sidenav {...exampleProps} />
    )
    expect(tree).toHaveLength(1)
  })
})
