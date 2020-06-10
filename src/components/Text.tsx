import { ReactNode } from 'react'
import styled from 'styled-components'

import Small from '@elements/Small'

interface Props {
  children: ReactNode
}

const Text = styled(Small)<Props>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sm};
`

export default Text
