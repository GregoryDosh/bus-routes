import React from 'react'
import { Redirect } from 'react-router'

import FourOhFour from '../containers/404/404'
import Home from '../containers/Home/Home'
import Stop from '../containers/Stop/Stop'
import Layout from '../containers/Layout/Layout'

export const routerConfig = [
  { component: Layout,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      { path: '/stop',
        exact: true,
        component: () => <Redirect to="/" />,
      },
      { path: '/stop/:stop',
        component: Stop,
      },
      { path: '*',
        component: FourOhFour,
      },
    ],
  },
]
