import { createSelector } from 'reselect'

import State from '../interfaces/State'

const getError = createSelector(
  (state: State) => state.authReducers.error,
  error => error,
)

export { getError }
