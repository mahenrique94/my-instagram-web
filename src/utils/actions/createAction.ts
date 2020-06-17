import { config } from '@config'

import { createAction as reduxCreateAction } from 'redux-actions'

const createAction = (name: string) =>
  reduxCreateAction(`${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`)

export { createAction }
