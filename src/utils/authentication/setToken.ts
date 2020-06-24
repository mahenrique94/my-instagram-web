import { config } from '@config'

import Cookie from 'js-cookie'

const setToken = (token: string) => Cookie.set(config.app.storageKeys.auth, token)

export { setToken }
