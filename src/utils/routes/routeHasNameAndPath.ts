import IRoute from '@interfaces/IRoute'

const routeHasNameAndPath = (route: IRoute): boolean => !!route && !!route.name && !!route.path

export { routeHasNameAndPath }
