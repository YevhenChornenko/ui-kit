import React from 'react'

import Link from 'next/link'

import { Typography } from '@/app/components/ui/typography'

export const Navigation = () => {
  return (
    <nav>
      <Link href="/button">
        <Typography tag="h2">Button</Typography>
      </Link>
      <Link href="/text-field">
        <Typography tag="h2">Text-field</Typography>
      </Link>
      <Link href="/select">
        <Typography tag="span">Select</Typography>
      </Link>
    </nav>
  )
}
