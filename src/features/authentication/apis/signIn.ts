import { http } from '@http'

interface Payload {
  user: string
  password: string
}

const signIn = (payload: Payload) => http.post('/auth/sign-in', payload)

export { signIn }
