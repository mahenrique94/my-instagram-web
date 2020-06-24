import { Draft } from 'immer'
import { Action } from 'redux-actions'

import Store from '../interfaces/Store'

const status = (state: Draft<Store>, action: Action<string>) => {
  state.status = action.payload
}

export { status }
