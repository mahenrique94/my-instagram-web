import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  children: FunctionComponent | ReactNode
  condition: boolean
  el: any // TODO => Fix this any type
}

const If = ({ children, condition, el }: Props) => {
  if (condition) {
    if (children instanceof Function) {
      return React.createElement(children)
    }
    return children
  }

  if (el instanceof Function) {
    return React.createElement(el)
  }

  return el
}

export default If
