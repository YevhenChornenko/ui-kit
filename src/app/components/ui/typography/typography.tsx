import React from 'react'
export type TypographyVariant =
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'title-4'
  | 'title-5'
  | 'sub-title'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'link'

export type TypographyTag = 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div'

export type TypographyProps<Tag extends TypographyTag> = ReactTagProps<Exclude<Tag, 'span'>> & {
  children: React.ReactNode
  tag?: TypographyTag
  variant: TypographyVariant
}

export const Typography = <T extends TypographyTag>(props) => {
  const { children, tag: Tag = 'div', variant }: TypographyProps<T> = props

  return <Tag>{children}</Tag>
}
