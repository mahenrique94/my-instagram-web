import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import Ul from '@elements/Ul'

import FooterListItem from './FooterListItem'

interface Props {
  children: ReactNode[]
}

const StyledFooterList = styled(Ul)<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacings.xs};

  @media (max-width: ${({ theme }) => theme.query.mobile}) {
    justify-content: space-around;
  }
`

const FooterList = () => (
  <StyledFooterList>
    <FooterListItem link="https://about.instagram.com/about-us">
      {i18n.t('links.about')}
    </FooterListItem>
    <FooterListItem link="https://help.instagram.com/">{i18n.t('links.help')}</FooterListItem>
    <FooterListItem link="https://instagram-press.com/">{i18n.t('links.press')}</FooterListItem>
    <FooterListItem link="https://www.instagram.com/developer/">
      {i18n.t('links.api')}
    </FooterListItem>
    <FooterListItem link="https://www.instagram.com/about/jobs/">
      {i18n.t('links.careers')}
    </FooterListItem>
    <FooterListItem link="https://www.instagram.com/legal/privacy/">
      {i18n.t('links.privacity')}
    </FooterListItem>
    <FooterListItem link="https://www.instagram.com/legal/terms/">
      {i18n.t('links.terms')}
    </FooterListItem>
    <FooterListItem link="https://www.instagram.com/explore/locations/">
      {i18n.t('links.localizations')}
    </FooterListItem>
    <FooterListItem link="https://www.instagram.com/directory/profiles/">
      {i18n.t('links.accountsMoreRelevance')}
    </FooterListItem>
    <FooterListItem link="https://www.instagram.com/directory/hashtags/">
      {i18n.t('links.hashtags')}
    </FooterListItem>
    <FooterListItem link="">{i18n.t('links.languages')}</FooterListItem>
  </StyledFooterList>
)

export default FooterList
