import { FunctionComponent } from 'react'

interface IRoute {
  component: FunctionComponent
  isPublic: boolean
  name: string
  path: string
}

export default IRoute
