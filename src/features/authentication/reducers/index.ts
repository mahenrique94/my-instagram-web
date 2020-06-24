import { handleActions } from '@utils/actions'

import ActionsTypes from '../ActionsTypes'
import Store from '../interfaces/Store'
import { store } from '../store'

import { error } from './error'
import { status } from './status'

const reducers = handleActions<Store>(
  {
    [ActionsTypes.AUTH_UPDATE_STATUS]: status,
    [ActionsTypes.AUTH_UPDATE_ERROR]: error,
  },
  store,
)

export { reducers }
