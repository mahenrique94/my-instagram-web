import React, { useEffect } from 'react'
import { OnSubmit, useForm } from 'react-hook-form'

import Spacings from '@helpers/Spacings'

import If from '@components/If'
import Margin from '@components/Margin'

import IField from '@interfaces/IField'

import FormButton from './FormButton'
import FormError from './FormError'
import FormField from './FormField'
import FormGroup from './FormGroup'

interface Props {
  fields: IField[]
  onSubmit: OnSubmit<Record<string, string | number>>
  submitButtonLabel: string
}

const Form = ({ fields, onSubmit, submitButtonLabel }: Props) => {
  const { errors, handleSubmit, register, triggerValidation } = useForm({
    mode: 'onChange',
  })
  const showError = false

  useEffect(() => {
    triggerValidation()
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, position) => (
          <Margin
            bottom={position + 1 === fields.length ? undefined : Spacings.xs}
            key={field.name}
          >
            <FormGroup>
              <FormField field={field} register={register} />
              <If condition={showError}>
                <Margin top="0.25rem">
                  <FormError error={errors[field.name]} />
                </Margin>
              </If>
            </FormGroup>
          </Margin>
        ))}
        <Margin top={Spacings.xss}>
          <FormButton disabled={Object.values(errors).length > 0}>{submitButtonLabel}</FormButton>
        </Margin>
      </form>
    </>
  )
}

export default Form
