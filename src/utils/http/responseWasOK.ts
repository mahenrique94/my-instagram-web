import HttpCodes from '@constants/HttpCodes'

import { responseWas } from './responseWas'

const responseWasOK = (responseCode: number): boolean => responseWas(responseCode, HttpCodes.ok)

export { responseWasOK }
