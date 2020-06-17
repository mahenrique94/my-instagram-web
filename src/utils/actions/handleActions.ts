import produce from 'immer'
import { handleActions as raHandeActions } from 'redux-actions'

const handleActions = (actions: any, state: any) =>
  raHandeActions(
    Object.keys(actions).reduce((newActions: any, key: any) => {
      newActions[key] = produce(actions[key])
      return newActions
    }, {}),
    state,
  )

export { handleActions }
