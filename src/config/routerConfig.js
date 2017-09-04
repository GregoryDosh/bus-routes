import React from 'react'
import HomeIcon from 'material-ui-icons/Home'

import FourOhFour from '../containers/404/404.js'
import Home from '../containers/Home/Home.js'
import Layout from '../containers/Layout/Layout.js'
import BusEast from '../images/bus-eastbound.svg'
import BusWest from '../images/bus-westbound.svg'

export const routerConfig = [
  { component: Layout,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      // { path: '/stop',
      //   exact: true,
      //   component: () => <Redirect to="/"/>,
      // },
      // { path: '/stop/:stop',
      //   component: BusRoutes,
      // },
      { path: '*',
        component: FourOhFour,
      },
    ],
  },
]

export const sidenavConfig = [
  {path: '/', name: 'Home', icon: <HomeIcon />},
  {path: '/stop/17860', name: '4th Street & Nicollet Mall', icon: <img alt="" src={BusEast} />},
  {path: '/stop/18563', name: 'Bandana Square', icon: <img alt="" src={BusWest} />},
]
