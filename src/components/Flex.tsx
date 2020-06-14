import FlexAlignments from '@constants/FlexAlignments'

import { ReactNode } from 'react'
import styled from 'styled-components'

import Div from '@elements/Div'

interface Props {
  children: ReactNode
  horizontalAlignment?: FlexAlignments | undefined
  verticalAlignment?: FlexAlignments | undefined
}

const Flex = styled(Div)<Props>`
  align-items: ${({ horizontalAlignment }) =>
    horizontalAlignment ? horizontalAlignment : FlexAlignments.flexStart};
  display: flex;
  justify-content: ${({ verticalAlignment }) =>
    verticalAlignment ? verticalAlignment : FlexAlignments.flexStart};
`

export default Flex
