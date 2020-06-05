import Route from '@interfaces/Route'

const routeHasNameAndPath = (route: Route): boolean => !!route && !!route.name && !!route.path

export { routeHasNameAndPath }
