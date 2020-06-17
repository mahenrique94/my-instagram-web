import { combineEpics } from 'redux-observable'

import { epics as authEpics } from '@features/authentication/epics'

const epics = combineEpics(...authEpics)

export { epics }
