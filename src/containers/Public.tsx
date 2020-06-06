import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Main from '@elements/Main'

import Container from '@components/Container'
import Footer from '@components/Footer'

interface Props {
  children: ReactNode
}

const StyledMain = styled(Main)`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Public = ({ children }: Props) => (
  <StyledMain>
    <Container>
      {children}
      <Footer />
    </Container>
  </StyledMain>
)

export default Public
