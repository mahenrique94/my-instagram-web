import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Switch } from 'react-router'

import { combineLinkedRoutes, combineRoutes } from '@utils/routes'

import { routes as authenticationRoutes } from '@features/authentication/routes'

import LoadingRoute from '@components/LoadingRoute'
import NotFound from '@components/NotFound'
import PrivateRoute from '@components/PrivateRoute'
import PublicRoute from '@components/PublicRoute'

import { history } from './history'

const allRoutes = [authenticationRoutes]

const appRoutes = combineRoutes(allRoutes)
const routes = combineLinkedRoutes(appRoutes)

const Routes = () => (
  <ConnectedRouter history={history}>
    <Suspense fallback={<LoadingRoute />}>
      <Switch>
        {appRoutes.map((route, index) => {
          const routeProps = {
            component: route.component,
            key: index,
            path: route.path,
          }
          return route.isPublic ? <PublicRoute {...routeProps} /> : <PrivateRoute {...routeProps} />
        })}
        <PublicRoute component={NotFound} path="*" />
      </Switch>
    </Suspense>
  </ConnectedRouter>
)

export { routes }
export default Routes
