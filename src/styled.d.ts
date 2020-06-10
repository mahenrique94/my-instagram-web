import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borders: {
      default: string
    }
    colors: {
      background: string
      border: string
      primary: string
      secondary: string
      text: string
      textAlt: string
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
