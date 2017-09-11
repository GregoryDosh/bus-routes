import React from 'react'
import { shallow } from 'enzyme'

import AddStop from './AddStop'

describe('AddStop component', () => {
  it('renders', () => {
    const exampleProps = {
    }

    const tree = shallow(
      <AddStop {...exampleProps} />
    )
    expect(tree).toHaveLength(1)
  })
})
