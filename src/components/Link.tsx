import React, { ReactNode } from 'react'
import styled from 'styled-components'

import A from '@elements/A'
import ELink from '@elements/Link'

import If from './If'

interface Props {
  children: ReactNode
  to: string
}

const StyledLink = styled(ELink)<Props>`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.sm};
  font-weight: bold;
`

const Link = ({ children, to }: Props) => (
  <If condition={to.startsWith('http')} el={<StyledLink to={to}>{children}</StyledLink>}>
    <A href={to} rel="noopener noreferrer" target="_blank">
      {children}
    </A>
  </If>
)

export default Link
