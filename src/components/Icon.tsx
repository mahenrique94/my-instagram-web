import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {
  animation?: boolean
  icon: IconProp
}

const Icon = ({ animation, icon }: Props) => <FontAwesomeIcon icon={icon} pulse={animation} />

export default Icon
