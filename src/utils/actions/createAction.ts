import { config } from '@config'

import { ActionFunctionAny, createAction as reduxCreateAction } from 'redux-actions'

const createAction = <T>(name: string, payloadCreator?: ActionFunctionAny<T>) => {
  if (payloadCreator) {
    return reduxCreateAction<T>(
      `${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`,
      payloadCreator,
    )
  }
  return reduxCreateAction<T>(`${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`)
}

export { createAction }
