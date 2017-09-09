import HomeIcon from 'material-ui-icons/Home'
import React from 'react'

import BusEast from '../images/bus-eastbound.svg'
import BusWest from '../images/bus-westbound.svg'

export const sidenavConfig = [
  {path: '/', name: 'Home', icon: <HomeIcon />},
  {path: '/stop/17860', name: '4th Street & Nicollet Mall', icon: <img alt="" src={BusEast} />},
  {path: '/stop/18563', name: 'Bandana Square', icon: <img alt="" src={BusWest} />},
]
