import React from 'react'
import { shallow } from 'enzyme'

import Stop from './Stop'

describe('Stop component', () => {
  it('renders', () => {
    const exampleProps = {
    }

    const tree = shallow(
      <Stop {...exampleProps} />
    )
    expect(tree).toHaveLength(1)
  })
})
