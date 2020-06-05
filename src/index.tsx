import React from 'react'
import ReactDOM from 'react-dom'

import Root from '@components/Root'

import '@cfg/scripts'
import '@cfg/styles'

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
)
