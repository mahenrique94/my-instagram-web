import IRoute from '@interfaces/IRoute'

import { routeHasNameAndPath } from './routeHasNameAndPath'

const combineLinkedRoutes = (routesToCombine: IRoute[]): any =>
  routesToCombine.filter(routeHasNameAndPath).reduce((links: any, route: IRoute) => {
    links[route.name] = route.path
    return links
  }, {})

export { combineLinkedRoutes }
