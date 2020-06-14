import FieldsTypes from './constants/FieldsTypes'

import React from 'react'

import FormFieldText from './FormFieldText'
import IFormField from './interfaces/IFormField'

const FormField = ({ field, register }: IFormField) => {
  const Field = FieldsTypes.get(field.type) || FormFieldText
  return <Field field={field} register={register} />
}

export default FormField
