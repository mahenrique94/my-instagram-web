import React from 'react'

import Routes from './Routes'
import StateManagement from './StateManagement'
import Theme from './Theme'

const Root = () => (
  <StateManagement>
    <Theme>
      <Routes />
    </Theme>
  </StateManagement>
)

export default Root
