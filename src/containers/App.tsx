import React, { ReactNode } from 'react'

import Container from '@components/Container'
import Header from '@components/Header'

interface Props {
  children: ReactNode
}

const App = ({ children }: Props) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
)

export default App
