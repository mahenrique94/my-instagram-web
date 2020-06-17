import FormFieldTypes from '@constants/FormFieldTypes'

import { i18n } from '@i18n'

import IField from '@interfaces/IField'

const signIn: IField[] = [
  { max: 255, name: 'user', placeholder: i18n.t('placeholders.user'), required: true },
  {
    max: 16,
    min: 8,
    name: 'password',
    placeholder: i18n.t('placeholders.password'),
    required: true,
    type: FormFieldTypes.password,
  },
]

export { signIn }
