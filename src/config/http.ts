import { config } from '@config'

import { ajax } from 'rxjs/ajax'

const http = {
  post: (url: string, body: any) =>
    ajax({
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      url: `${config.api.url}${url}`,
    }),
}

export { http }
