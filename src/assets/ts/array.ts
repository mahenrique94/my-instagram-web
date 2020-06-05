import sortBy from 'sort-by'

import { not } from '@utils/functions'

if (not(Array.prototype.$sortBy)) {
  Array.prototype.$sortBy = function sort(...by: string[]) {
    return this.sort(sortBy(...by))
  }
}
