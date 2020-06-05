import { FunctionComponent } from 'react'

interface Route {
  component: FunctionComponent
  isPublic: boolean
  name: string
  path: string
}

export default Route
