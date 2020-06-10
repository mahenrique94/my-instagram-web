import { ReactNode } from 'react'
import styled from 'styled-components'

import Div from '@elements/Div'

interface Props {
  children: ReactNode
}

const Center = styled(Div)<Props>`
  text-align: center;
`

export default Center
