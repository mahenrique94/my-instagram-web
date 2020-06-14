import FormFieldTypes from '@constants/FormFieldTypes'

import React from 'react'
import styled from 'styled-components'

import IFormField from './interfaces/IFormField'
import { formField } from './mixins/formField'

const StyledFormFieldPassword = styled.input.attrs<IFormField>(() => ({
  type: FormFieldTypes.password,
}))`
  ${formField}
`

const FormFieldPassword = ({ field, register }: IFormField) => (
  <StyledFormFieldPassword
    maxLength={field.max}
    minLength={field.min}
    name={field.name}
    placeholder={field.placeholder}
    ref={register({ maxLength: field.max, minLength: field.min, required: field.required })}
  />
)

export default FormFieldPassword
