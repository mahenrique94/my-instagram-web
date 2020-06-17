import { handleAPI } from '@utils/http'

import { apis } from '../apis'

interface Payload {
  user: string
  password: string
}

const signIn = (payload: Payload) => handleAPI(apis.signIn, payload)

export { signIn }
