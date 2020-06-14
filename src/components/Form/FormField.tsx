import FormFieldTypes from '@constants/FormFieldTypes'

import React from 'react'

import FormFieldPassword from './FormFieldPassword'
import FormFieldText from './FormFieldText'
import IFormField from './types/IFormField'

const types = new Map<string | undefined, any>()
types.set(FormFieldTypes.password, FormFieldPassword)
types.set(FormFieldTypes.text, FormFieldText)

const FormField = ({ error, field, register }: IFormField) => {
  const Field = types.get(field.type) || FormFieldText
  console.log(error)
  return <Field error={error} field={field} register={register} />
}

export default FormField
