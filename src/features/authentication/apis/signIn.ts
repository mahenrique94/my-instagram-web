import { http } from '@http'

interface Payload {
  username: string
  password: string
}

const signIn = (payload: Payload) => http.post('/auth/sign-in', payload)

export { signIn }
