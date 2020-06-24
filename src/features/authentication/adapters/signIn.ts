const signIn = (payload: { password: string; user: string }) => ({
  [payload.user.includes('@') ? 'email' : 'username']: payload.user,
  password: payload.password,
})

export { signIn }
