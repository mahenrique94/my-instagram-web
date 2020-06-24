import { config } from '@config'

import Cookie from 'js-cookie'

const getToken = (): string | undefined => Cookie.get(config.app.storageKeys.auth)

export { getToken }
