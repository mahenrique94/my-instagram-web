/* eslint-disable no-alert */
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'
import { routes } from '@routes'

import EHeader from '@elements/Header'

import Brand from './Brand'
import Container from './Container'
import Form from './Form'
import Link from './Link'
import Menu from './Menu'

const StyledHeader = styled(EHeader)`
  border-bottom: ${({ theme }) => theme.borders.default};
  padding: ${({ theme }) => theme.spacings.xs} 0;

  ${Container} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`

const Header = () => (
  <StyledHeader>
    <Container>
      <Link to={routes.feed}>
        <Brand />
      </Link>
      <Form
        fields={[
          {
            name: 'search',
            placeholder: i18n.t('placeholders.search'),
            type: 'search',
          },
        ]}
        isLoading={false}
        onSubmit={values => alert(`${i18n.t('messages.searchingFor')}: ${values.search}`)}
      />
      <Menu />
    </Container>
  </StyledHeader>
)

export default Header
