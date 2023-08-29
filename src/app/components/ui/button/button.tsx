import React from 'react'

import clsx from 'clsx'

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
    <button className={clsx(s.root, {})} type={type}>
      {children}
    </button>
  )
}
