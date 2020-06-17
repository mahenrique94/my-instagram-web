import { config } from '@config'

import HttpCodes from '@constants/HttpCodes'
import Times from '@constants/Times'

import axios, { AxiosError } from 'axios'

import { routes } from '@routes'

import { getToken, isLogged } from '@utils/authentication'
import { navigateTo } from '@utils/browser'

const http = axios.create({
  baseURL: config.api.url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: Times.thirdSeconds,
})

http.interceptors.request.use(request => {
  if (isLogged()) {
    request.headers.Authorization = getToken()
  }
  return request
})

http.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response?.status === HttpCodes.unauthorized) {
    navigateTo(routes.signIn)
  }
  return Promise.reject(error)
})

export { http }
