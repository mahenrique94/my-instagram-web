import { ReactNode } from 'react'
import styled from 'styled-components'

import Div from '@elements/Div'

interface Props {
  center?: boolean
  children: ReactNode
}

const Inline = styled(Div)<Props>`
  display: flex;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
`

export default Inline
