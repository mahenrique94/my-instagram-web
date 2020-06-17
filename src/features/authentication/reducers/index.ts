import { handleActions } from '@utils/actions'

import { actions } from '../actions'
import { store } from '../store'

import { error } from './error'
import { status } from './status'

const reducers = handleActions(
  {
    [actions.updateStatus as any]: status,
    [actions.updateError as any]: error,
  },
  store,
)

export { reducers }
