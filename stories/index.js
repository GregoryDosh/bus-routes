import React from 'react'

import Bus from '../src/components/Bus/Bus'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Bus')} />)

storiesOf('Bus', module)
  .add('with default props', () => <Bus />)
  .add('with location', () => <Bus location="44.97167,-93.24725" />)
  .add('with long description', () => <Bus description="Here we go, somewhere into the wild blue yonder!" />)
