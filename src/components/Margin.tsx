import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Spacings from '@helpers/Spacings'

import Div from '@elements/Div'

interface Props {
  bottom?: Spacings | number
  children: ReactNode
  left?: Spacings | number
  right?: Spacings | number
  top?: Spacings | number
}

const StyledMargin = styled(Div)<Props>`
  margin: ${({ bottom, left, right, top }) => `${top} ${right} ${bottom} ${left}`};
`

const Margin = ({ bottom = 0, children, left = 0, right = 0, top = 0 }: Props) => (
  <StyledMargin bottom={bottom} left={left} right={right} top={top}>
    {children}
  </StyledMargin>
)

export default Margin
