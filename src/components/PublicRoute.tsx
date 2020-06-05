import React, { FunctionComponent } from 'react'
import { Route } from 'react-router'

interface Props {
  component: FunctionComponent
  path: string
}

const PublicRoute = (props: Props) => <Route {...props} />

export default PublicRoute
