import { createAction } from '@utils/actions'

import ActionsTypes from '../ActionsTypes'

const updateStatus = createAction<string>(ActionsTypes.AUTH_UPDATE_STATUS)

export { updateStatus }
