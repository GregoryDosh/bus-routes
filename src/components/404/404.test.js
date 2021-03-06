import React from 'react'
import { shallow } from 'enzyme'

import FourOhFour from './404'

describe('FourOhFour component', () => {
  it('renders', () => {
    const exampleProps = {
    }

    const tree = shallow(
      <FourOhFour {...exampleProps} />
    )
    expect(tree).toHaveLength(1)
  })
})
