import { css } from 'styled-components'

const formField = css`
  background-color: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => theme.borders.default};
  border-radius: ${({ theme }) => theme.bordersRadius.xs};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.xss};
  padding: ${({ theme }) => `${theme.spacings.xs} ${theme.spacings.xss}`};
  &:focus {
    border-color: ${({ theme }) => theme.colors.text};
  }
`

export { formField }
