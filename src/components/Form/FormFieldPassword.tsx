import FormFieldTypes from '@constants/FormFieldTypes'

import React from 'react'
import styled from 'styled-components'

import IFormField from './types/IFormField'

const StyledFormFieldPassword = styled.input.attrs<IFormField>(() => ({
  type: FormFieldTypes.password,
}))``

const FormFieldPassword = ({ error, field, register }: IFormField) => (
  <StyledFormFieldPassword name={field.name} ref={register({ required: field.required })} />
)

export default FormFieldPassword
