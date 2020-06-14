import IField from '@interfaces/IField'

import IFormFieldError from './IFormFieldError'

interface IFormField {
  error: IFormFieldError
  field: IField
  register: Function
}

export default IFormField
