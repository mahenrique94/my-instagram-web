import produce from 'immer'
import { handleActions as raHandeActions } from 'redux-actions'

import { getAction } from './getAction'

const handleActions = <T>(actions: { [name: string]: (...args: any[]) => any }, state: T) =>
  raHandeActions(
    Object.keys(actions).reduce((newActions: any, key: any) => {
      newActions[getAction(key)] = produce(actions[key])
      return newActions
    }, {}),
    state,
  )

export { handleActions }
