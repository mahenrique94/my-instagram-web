import React from 'react'
import styled from 'styled-components'

import EFooter from '@elements/Footer'

import FooterCopyRight from './FooterCopyRight'
import FooterList from './FooterList'

const StyledFooter = styled(EFooter)`
  bottom: ${({ theme }) => theme.spacings.lg};
  left: 50%;
  position: absolute;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.query.mobile}) {
    width: 70%;
  }
`

const Footer = () => (
  <StyledFooter>
    <FooterList />
    <FooterCopyRight />
  </StyledFooter>
)

export default Footer
