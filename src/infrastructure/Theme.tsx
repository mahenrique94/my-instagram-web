import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import Themes from '@helpers/Themes'

interface Props {
  children: ReactNode
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={Themes.light}>{children}</ThemeProvider>
)

export default Theme
