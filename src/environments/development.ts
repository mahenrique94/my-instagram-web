import Environments from '@constants/Environments'

import { deepFreeze } from '@utils/object'

import { config as envConfig } from './env'

const config = { ...envConfig() }

config.app.environment = Environments.development

deepFreeze(config)

export { config }
