import { DefaultTheme } from 'styled-components'

import Borders from './Borders'
import BordersRadius from './BordersRadius'
import Colors from './Colors'
import Fonts from './Fonts'
import MediaQueries from './MediaQueries'
import Spacings from './Spacings'

const light: DefaultTheme = {
  borders: {
    default: `${Borders.default} ${Colors.border}`,
  },
  bordersRadius: {
    lg: BordersRadius.lg,
    lgg: BordersRadius.lgg,
    md: BordersRadius.md,
    mdd: BordersRadius.mdd,
    sm: BordersRadius.sm,
    smm: BordersRadius.smm,
    xs: BordersRadius.xs,
    xss: BordersRadius.xss,
  },
  colors: {
    background: Colors.background,
    border: Colors.border,
    error: Colors.error,
    primary: Colors.primary,
    secondary: Colors.secondary,
    secondaryDisabled: Colors.secondaryDisabled,
    success: Colors.success,
    text: Colors.text,
    textAlt: Colors.textAlt,
    textLight: Colors.textLight,
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
  query: {
    desktop: MediaQueries.desktop,
    mobile: MediaQueries.mobile,
    screen: MediaQueries.screen,
    tablet: MediaQueries.tablet,
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
