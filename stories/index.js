import React from 'react'

import Bus from '../src/components/Bus/Bus'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Bus')} />)

storiesOf('Bus', module)
  .add('with text', () => <Bus onClick={action('clicked')} />)
