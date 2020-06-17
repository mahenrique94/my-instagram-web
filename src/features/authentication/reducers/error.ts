import Store from '../interfaces/Store'

const error = (state: Store, { payload }: any) => {
  state.error = payload
}

export { error }
