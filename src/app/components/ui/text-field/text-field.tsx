// @flow
import * as React from 'react'
import { ReactNode } from 'react'

interface TextFieldProps {
  value?: string
  label?: ReactNode
  type?: 'email' | 'text' | 'password' | 'search'
  iconStart?: ReactNode
  iconEnd?: ReactNode
  size?: number
  name?: string
  pattern?: string
  placeholder?: string
  required?: boolean
  autofocus?: boolean
  errorMessage?: string
}

export const TextField = (props: TextFieldProps) => {
  const {
    value,
    label,
    type = 'text',
    iconStart,
    iconEnd,
    name,
    pattern,
    placeholder,
    required,
    autofocus,
    errorMessage,
  }: TextFieldProps = props

  return (
    <div>
      <input type={type} />
    </div>
  )
}
