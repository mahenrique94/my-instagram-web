import PageStatus from '@constants/PageStatus'

import { createSelector } from 'reselect'

import State from '../interfaces/State'

const getIsLoading = createSelector(
  (state: State) => state.authReducers.status,
  status => status === PageStatus.loading,
)

export { getIsLoading }
