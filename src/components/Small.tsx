import styled from 'styled-components'

import ESmall from '@elements/Small'

interface Props {
  children: string
}

const Small = styled(ESmall)<Props>`
  font-size: ${({ theme }) => theme.fonts.xss};
`

export default Small
