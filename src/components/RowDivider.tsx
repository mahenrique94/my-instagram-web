import FlexAlignments from '@constants/FlexAlignments'

import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Div from '@elements/Div'

import Divider from './Divider'
import Flex from './Flex'

interface Props {
  children: ReactNode
}

const StyledRowDivider = styled(Div)<Props>`
  color: ${({ theme }) => theme.colors.textAlt};
  padding: 0 ${({ theme }) => theme.spacings.xss};
`

const RowDivider = ({ children }: Props) => (
  <Flex horizontalAlignment={FlexAlignments.center}>
    <Divider />
    <StyledRowDivider>{children}</StyledRowDivider>
    <Divider />
  </Flex>
)

export default RowDivider
