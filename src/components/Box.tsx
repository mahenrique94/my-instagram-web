import { ReactNode } from 'react'
import styled from 'styled-components'

import Div from '@elements/Div'

interface Props {
  children: ReactNode
}

const Box = styled(Div)<Props>`
  background-color: #ffffff;
  border: ${({ theme }) => theme.borders.default};
  display: inline-block;
  min-width: 350px;
  padding: ${({ theme }) => `${theme.spacings.smm} ${theme.spacings.lgg}`};
`

export default Box
