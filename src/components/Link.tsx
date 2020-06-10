import React, { ReactNode } from 'react'
import styled from 'styled-components'

import A from '@elements/A'

import If from './If'

interface Props {
  children: ReactNode
  to: string
}

const StyledLink = styled(A)<Props>`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.sm};
  font-weight: bold;
`

const Link = ({ children, to }: Props) => (
  <If condition={to.startsWith('http')} el={<StyledLink to={to}>{children}</StyledLink>}>
    <a href={to} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  </If>
)

export default Link
