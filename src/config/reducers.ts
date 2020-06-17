import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { reducers as authReducers } from '@features/authentication/reducers'

import { history } from './history'

const reducers = combineReducers({
  authReducers,
  router: connectRouter(history),
})

export { reducers }
