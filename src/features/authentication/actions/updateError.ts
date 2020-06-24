import { createAction } from '@utils/actions'

import ActionsTypes from '../ActionsTypes'

const updateError = createAction<string>(ActionsTypes.AUTH_UPDATE_ERROR)

export { updateError }
