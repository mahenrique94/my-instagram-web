import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { history } from './history'

const reducers = combineReducers({
  router: connectRouter(history),
})

export { reducers }
