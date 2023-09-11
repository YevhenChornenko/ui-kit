'use client'

import * as React from 'react'
import { ComponentPropsWithoutRef, useEffect } from 'react'

import Markdown from 'markdown-to-jsx'
import { log } from 'next/dist/server/typescript/utils'

import { Button } from '@/app/components/ui/button'
import s from '@/app/components/ui/button/button.module.scss'
import { Typography } from '@/app/components/ui/typography'
import { Layout } from '@/layouts/root-layout'

const ButtonPage = props => {
  useEffect(() => {
    import('@/app/md/test.md').then(res => console.log(res))
  }, [])

  return (
    <div>
      <Layout>
        <Typography tag="h1">Button primary</Typography>
        <Button>Click me</Button>
        <Typography tag="h1">Button secondary</Typography>
        <Button variant="secondary">Click me</Button>
        <Typography tag="h1">Button outline</Typography>
        <Button variant="outline">Click me</Button>
        <Typography tag="h1">Button</Typography>
        <Button variant="text-button">Click me</Button>
        <Markdown></Markdown>
      </Layout>
    </div>
  )
}

export default ButtonPage
