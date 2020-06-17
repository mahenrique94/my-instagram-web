import { deepFreeze } from '@utils/object'

import IEnvironment from '@interfaces/IEnvironment'

const config = (): IEnvironment => ({
  api: {
    url: 'http://localhost:8080/v1/api',
  },
  app: {
    environment: null,
    namespace: 'my-instagram-web',
  },
})

deepFreeze(config)

export { config }
