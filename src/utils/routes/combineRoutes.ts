import IRoute from '@interfaces/IRoute'

const combineRoutes = (routesToCombine: Array<IRoute[]>): IRoute[] =>
  routesToCombine.reduce((allRoutes, route) => allRoutes.concat(route), [])

export { combineRoutes }
