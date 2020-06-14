import FormFieldTypes from '@constants/FormFieldTypes'

import React from 'react'
import styled from 'styled-components'

import IFormField from './types/IFormField'

const StyledFormFieldText = styled.input.attrs<IFormField>(() => ({
  type: FormFieldTypes.password,
}))``

const FormFieldText = ({ error, field, register }: IFormField) => (
  <StyledFormFieldText name={field.name} ref={register({ required: field.required })} />
)

export default FormFieldText
