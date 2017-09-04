import React from 'react'
import { shallow } from 'enzyme'

import FourOhFour from './FourOhFour'

describe('FourOhFour component', () => {
  it('renders', () => {
    const exampleProps = {
    }

    const layout = shallow(
      <FourOhFour {...exampleProps} />
    )
    expect(layout).toHaveLength(1)
  })
})
