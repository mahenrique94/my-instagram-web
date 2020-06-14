import { ReactNode } from 'react'
import styled from 'styled-components'

import Div from '@elements/Div'

interface Props {
  children: ReactNode
}

const FormGroup = styled(Div)<Props>`
  display: flex;
  flex-direction: column;
`

export default FormGroup
