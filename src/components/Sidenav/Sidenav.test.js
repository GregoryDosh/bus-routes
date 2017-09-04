import React from 'react'
import { shallow } from 'enzyme'

import Sidenav from './Sidenav'

describe('Sidenav component', () => {
  it('renders', () => {
    const exampleProps = {
    }

    const layout = shallow(
      <Sidenav {...exampleProps} />
    )
    expect(layout).toHaveLength(1)
  })
})
