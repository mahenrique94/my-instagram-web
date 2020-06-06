import React, { ReactNode } from 'react'
import styled from 'styled-components'

import A from '@elements/A'

interface Props {
  children: ReactNode
  link: string
}

const StyledFooterLink = styled(A)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.xss};
  font-weight: 600;
  text-transform: uppercase;
`

const FooterLink = ({ children, link }: Props) => <StyledFooterLink to={link}>{children}</StyledFooterLink>

export default FooterLink
