import { AxiosError, AxiosResponse } from 'axios'

import { handleError } from './handleError'
import { handleSuccess } from './handleSuccess'
import { responseWasOK } from './responseWasOK'

const handleAPI = (api: Function, payload: any) =>
  api(payload)
    .then((response: AxiosResponse) => {
      console.log('DEU BOM')
      if (responseWasOK(response.status)) {
        return handleSuccess(response)
      }
      return null
    })
    .catch((error: AxiosError) => {
      handleError(error)
      throw error
    })

export { handleAPI }
