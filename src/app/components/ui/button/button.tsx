import React, { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  type?: 'button' | 'submit'
  onClick?: (event: MouseEvent) => void
  isDisabled?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    type = 'button',
    isDisabled = false,
    fullWidth = false,
    onClick,
  }: ButtonProps = props

  return (
    <button
      disabled={isDisabled}
      className={clsx(s.root, s[variant], {
        [s.fullWidth]: fullWidth,
      })}
      type={type}
    >
      {children}
    </button>
  )
}
