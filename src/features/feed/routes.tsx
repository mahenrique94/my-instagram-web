import React, { lazy } from 'react'

const Feed = lazy(() => import('./containers/Feed'))

const routes = [{ component: () => <Feed />, isPublic: false, name: 'feed', path: '/feed' }]

export { routes }
