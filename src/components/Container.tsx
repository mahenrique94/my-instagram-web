import styled from 'styled-components'

import Div from '@elements/Div'

const Container = styled(Div)`
  margin: 0 auto;
  max-width: 935px;
  padding: ${({ theme }) => theme.spacings.lgg} 0;
`

export default Container
