import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Li from '@elements/Li'

import FooterLink from './FooterLink'

interface Props {
  children: ReactNode
  link: string
}

const StyledFooterListItem = styled(Li)`
  margin-right: ${({ theme }) => theme.spacings.xs};
  &:first-child {
    margin-right: 0;
  }
`

const FooterListItem = ({ children, link }: Props) => (
  <StyledFooterListItem>
    <FooterLink link={link}>{children}</FooterLink>
  </StyledFooterListItem>
)

export default FooterListItem
