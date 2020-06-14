import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import { i18n } from '@i18n'

interface Props {
  children: ReactNode
  title: string
}

const Html = ({ children, title }: Props) => (
  <>
    <Helmet titleTemplate={`%s • ${i18n.t('app.name')}`}>
      <title>{title}</title>
    </Helmet>
    {children}
  </>
)

export default Html
