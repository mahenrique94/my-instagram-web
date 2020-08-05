import FormFieldTypes from '@constants/FormFieldTypes'

import React from 'react'
import styled from 'styled-components'

import IFormField from './interfaces/IFormField'
import { formField } from './mixins/formField'

const StyledFormFieldSearch = styled.input.attrs<IFormField>(() => ({
  type: FormFieldTypes.search,
}))`
  ${formField}
`

const FormFieldSearch = ({ field, register }: IFormField) => (
  <StyledFormFieldSearch
    maxLength={field.max}
    minLength={field.min}
    name={field.name}
    placeholder={field.placeholder}
    ref={register({ maxLength: field.max, minLength: field.min, required: field.required })}
  />
)

export default FormFieldSearch
