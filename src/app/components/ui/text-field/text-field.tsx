// @flow
import * as React from 'react'
import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './text-field.module.scss'

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
  className?: string
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
    className,
  }: TextFieldProps = props
  const classNames = {
    root: clsx(s.box, className),
    label: s.label,
    input: clsx(s.input),
  }

  return (
    <div className={classNames.root}>
      <label>lable</label>
      <input className={classNames.input} type={type} />
    </div>
  )
}
