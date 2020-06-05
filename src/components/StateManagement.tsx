import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@cfg/store'

interface Props {
  children: ReactNode
}

const StateManagement = ({ children }: Props) => <Provider store={store}>{children}</Provider>

export default StateManagement
