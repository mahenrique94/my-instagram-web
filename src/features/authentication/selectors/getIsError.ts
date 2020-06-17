import PageStatus from '@constants/PageStatus'

import { createSelector } from 'reselect'

import State from '../interfaces/State'

const getIsError = createSelector(
  (state: State) => state.authReducers.status,
  status => status === PageStatus.error,
)

export { getIsError }
