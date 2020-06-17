import { createAction } from '@utils/actions'

import ActionsTypes from './ActionsTypes'

const requestSignIn = createAction(ActionsTypes.AUTH_REQUEST_SIGN_IN)
const updateError = createAction(ActionsTypes.AUTH_UPDATE_ERROR)
const updateStatus = createAction(ActionsTypes.AUTH_UPDATE_STATUS)

const actions = {
  requestSignIn,
  updateError,
  updateStatus,
}

export { actions }
