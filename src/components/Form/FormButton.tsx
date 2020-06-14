import { ReactNode } from 'react'
import styled from 'styled-components'

import Button from '@elements/Button'

interface Props {
  children: ReactNode
  disabled: boolean
}

const FormButton = styled(Button).attrs(() => ({
  type: 'submit',
}))<Props>`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.secondaryDisabled : theme.colors.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.bordersRadius.xss};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.xs} 0;
  text-align: center;
  width: 100%;
`

export default FormButton
