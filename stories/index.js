import React from 'react'

import FourOhFour from '../src/components/404/404'
import Bus from '../src/components/Bus/Bus'
import Home from '../src/components/Home/Home'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('Components/404', module)
  .add('with default props', () => <FourOhFour />)

storiesOf('Components/Bus', module)
  .add('with default props', () => <Bus />)
  .add('with location', () => <Bus location="44.97167,-93.24725" />)
  .add('with long description', () => <Bus description="Here we go, somewhere into the wild blue yonder!" />)

storiesOf('Components/Home', module)
  .add('with default props', () => <Home />)
