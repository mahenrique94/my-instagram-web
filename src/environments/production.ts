import Environments from '@constants/Environments'

import { deepFreeze } from '@utils/object'

import { config as envConfig } from './env'

const config = { ...envConfig() }

config.app.environment = Environments.production
config.api.url = 'https://mhc-my-instagram-api.herokuapp.com/v1/api'

deepFreeze(config)

export { config }
