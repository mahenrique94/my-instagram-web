import IField from '@interfaces/IField'

const signIn: IField[] = [
  { max: 255, name: 'user', required: true },
  { max: 16, name: 'password', required: true, type: 'password' },
]

export { signIn }
