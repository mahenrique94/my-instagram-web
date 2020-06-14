import FormFieldTypes from '@constants/FormFieldTypes'

import FormFieldPassword from '@components/Form/FormFieldPassword'
import FormFieldText from '@components/Form/FormFieldText'

const FieldsTypes = new Map<string | undefined, any>()
FieldsTypes.set(FormFieldTypes.password, FormFieldPassword)
FieldsTypes.set(FormFieldTypes.text, FormFieldText)

export default FieldsTypes
