import Route from '@interfaces/Route'

import { routeHasNameAndPath } from './routeHasNameAndPath'

const combineLinkedRoutes = (routesToCombine: Route[]): any =>
  routesToCombine.filter(routeHasNameAndPath).reduce((links: any, route: Route) => {
    links[route.name] = route.path
    return links
  }, {})

export { combineLinkedRoutes }
