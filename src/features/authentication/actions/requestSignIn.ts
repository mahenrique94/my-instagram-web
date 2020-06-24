import { createAction } from '@utils/actions'

import ActionsTypes from '../ActionsTypes'
import { adapters } from '../adapters'

interface Payload {
  password: string
  user: string
}

interface Result {
  email?: string
  username?: string
  password: string
}

const requestSignIn = createAction<Payload | Result>(
  ActionsTypes.AUTH_REQUEST_SIGN_IN,
  adapters.signIn,
)

export { requestSignIn }
