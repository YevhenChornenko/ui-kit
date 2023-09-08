import React from 'react'

export type TypographyTag = 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div'

export type TypographyProps = {
  children?: React.ReactNode
  tag: TypographyTag
}

export const Typography = (props: TypographyProps) => {
  const { children, tag: Tag = 'span' }: TypographyProps = props

  return <Tag>{children}</Tag>
}
