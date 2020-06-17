import PageStatus from '@constants/PageStatus'

import Store from './interfaces/Store'

const store: Store = {
  error: '',
  status: PageStatus.rendered,
}

export { store }
