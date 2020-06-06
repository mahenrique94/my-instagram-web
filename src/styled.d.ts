import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      primary: string
      text: string
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
