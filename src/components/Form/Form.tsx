import React from 'react'
import { useForm, OnSubmit } from 'react-hook-form'

import IField from '@interfaces/IField'

import FormField from './FormField'

interface Props {
  fields: IField[]
  onSubmit: OnSubmit<Record<string, string | number>>
}

const Form = ({ fields, onSubmit }: Props) => {
  const { errors, handleSubmit, register } = useForm()
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(field => (
          <FormField
            error={errors[field.name]}
            field={field}
            key={field.name}
            register={register}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form
