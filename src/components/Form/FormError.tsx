import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import IFormFieldError from './interfaces/IFormFieldError'

interface Props {
  error: IFormFieldError
}

const StyledFormError = styled.span`
  color: ${({ theme }) => theme.colors.error};
  display: block;
  font-size: ${({ theme }) => theme.fonts.xss};
  text-align: left;
  width: 100%;
`

const FormError = ({ error }: Props) =>
  error?.type ? (
    <StyledFormError>{i18n.t(`form.validations.${error?.type}`)}</StyledFormError>
  ) : null

export default FormError
