import { Draft } from 'immer'
import { Action } from 'redux-actions'

import Store from '../interfaces/Store'

const error = (state: Draft<Store>, action: Action<string>) => {
  state.error = action.payload
}

export { error }
