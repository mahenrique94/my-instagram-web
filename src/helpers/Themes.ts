import { DefaultTheme } from 'styled-components'

import Colors from './Colors'
import Fonts from './Fonts'
import Spacings from './Spacings'

const light: DefaultTheme = {
  colors: {
    background: Colors.background,
    primary: Colors.primary,
    text: Colors.text,
  },
  fonts: {
    lg: Fonts.lg,
    lgg: Fonts.lgg,
    md: Fonts.md,
    mdd: Fonts.mdd,
    sm: Fonts.sm,
    smm: Fonts.smm,
    xs: Fonts.xs,
    xss: Fonts.xss,
  },
  spacings: {
    lg: Spacings.lg,
    lgg: Spacings.lgg,
    md: Spacings.md,
    mdd: Spacings.mdd,
    sm: Spacings.sm,
    smm: Spacings.smm,
    xs: Spacings.xs,
    xss: Spacings.xss,
  },
}

const Themes = {
  light,
}

export default Themes
