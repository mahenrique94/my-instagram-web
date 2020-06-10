import React, { ReactNode } from 'react'
import styled from 'styled-components'

import A from '@elements/A'

interface Props {
  children: ReactNode
  to: string
}

const StyledFooterLink = styled(A)<Props>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.xss};
  font-weight: 600;
  text-transform: uppercase;
`

const FooterLink = ({ children, to }: Props) => (
  <StyledFooterLink to={to}>{children}</StyledFooterLink>
)

export default FooterLink
