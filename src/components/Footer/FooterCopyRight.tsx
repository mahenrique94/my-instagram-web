import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import Span from '@elements/Span'

const StyledFooterCopyRight = styled(Span)`
  color: ${({ theme }) => theme.colors.text};
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
