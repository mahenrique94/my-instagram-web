import Environments from '@constants/Environments'

import * as configs from '@env'

const environment = process.env.REACT_APP_ENVIRONMENT || Environments.development
const config = (configs as any)[environment]

export { config }
