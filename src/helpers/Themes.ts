import { DefaultTheme } from 'styled-components'

import Borders from './Borders'
import Colors from './Colors'
import Fonts from './Fonts'
import Spacings from './Spacings'

const light: DefaultTheme = {
  borders: {
    default: `${Borders.default} ${Colors.border}`,
  },
  colors: {
    background: Colors.background,
    border: Colors.border,
    primary: Colors.primary,
    secondary: Colors.secondary,
    text: Colors.text,
    textAlt: Colors.textAlt,
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
