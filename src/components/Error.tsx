import { ReactNode } from 'react'
import styled from 'styled-components'

import Small from '@elements/Small'

interface Props {
  children: ReactNode
}

const Error = styled(Small)<Props>`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fonts.xss};
`

export default Error
