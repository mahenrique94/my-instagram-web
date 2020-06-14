import styled from 'styled-components'

import Div from '@elements/Div'

const Divider = styled(Div)`
  background: ${({ theme }) => theme.colors.border};
  flex: 1;
  height: 1px;
`

export default Divider
