import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import Span from '@elements/Span'

interface Props {
  children: ReactNode
}

const StyledFooterCopyRight = styled(Span)<Props>`
  color: ${({ theme }) => theme.colors.textAlt};
  font-size: ${({ theme }) => theme.fonts.xss};
  font-weight: 600;
  text-transform: uppercase;
`

const FooterCopyRight = () => (
  <StyledFooterCopyRight>
    &copy; 2020 {i18n.t('app.name')} {i18n.t('labels.of')} {i18n.t('app.author')}
  </StyledFooterCopyRight>
)

export default FooterCopyRight
