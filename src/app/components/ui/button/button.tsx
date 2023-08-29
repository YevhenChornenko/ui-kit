import React from 'react'

import s from './button.module.scss'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  type?: 'button' | 'submit'
  disable?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = props => {
  const {
    children,
    variant = 'primary',
    type = 'button',
    disable = false,
    fullWidth = false,
  }: ButtonProps = props

  return (
    <button className={s.root} type={type}>
      {children}
    </button>
  )
}
