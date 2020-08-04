import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borders: {
      default: string
    }
    bordersRadius: {
      lg: string
      lgg: string
      md: string
      mdd: string
      sm: string
      smm: string
      xs: string
      xss: string
    }
    colors: {
      background: string
      border: string
      error: string
      primary: string
      secondary: string
      secondaryDisabled: string
      success: string
      text: string
      textAlt: string
      textLight: string
    }
    fonts: {
      xs: string
      xss: string
      sm: string
      smm: string
      md: string
      mdd: string
      lg: string
      lgg: string
    }
    query: {
      desktop: string
      mobile: string
      screen: string
      tablet: string
    }
    spacings: {
      xs: string
      xss: string
      sm: string
      smm: string
      md: string
      mdd: string
      lg: string
      lgg: string
    }
  }
}
