import React, { FunctionComponent } from 'react'
import { Route } from 'react-router'

interface Props {
  component: FunctionComponent
  path: string
}

const PrivateRoute = (props: Props) => <Route {...props} />

export default PrivateRoute
