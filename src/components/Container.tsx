import { ReactNode } from 'react'
import styled from 'styled-components'

import Div from '@elements/Div'

interface Props {
  children: ReactNode
}

const Container = styled(Div)<Props>`
  margin: 0 auto;
  max-width: 935px;
  padding: ${({ theme }) => theme.spacings.lgg} 0;
`

export default Container
