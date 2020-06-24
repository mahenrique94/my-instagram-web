import FormFieldTypes from '@constants/FormFieldTypes'

import { i18n } from '@i18n'

const fields = {
  password: {
    max: 16,
    min: 8,
    name: 'password',
    placeholder: i18n.t('placeholders.password'),
    required: true,
    type: FormFieldTypes.password,
  },
  user: {
    max: 255,
    min: 5,
    name: 'user',
    placeholder: i18n.t('placeholders.user'),
    required: true,
  },
}

export { fields }
