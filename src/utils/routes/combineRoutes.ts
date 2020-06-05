import Route from '@interfaces/Route'

const combineRoutes = (routesToCombine: Array<Route[]>): Route[] =>
  routesToCombine.reduce((allRoutes, route) => allRoutes.concat(route), [])

export { combineRoutes }
