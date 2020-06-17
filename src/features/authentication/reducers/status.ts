import Store from '../interfaces/Store'

const status = (state: Store, { payload }: any) => {
  state.status = payload
}

export { status }
