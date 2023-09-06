import React from 'react'

import Link from 'next/link'

import { Typography } from '@/app/components/ui/typography'

export const Navigation = () => {
  return (
    <div>
      <Link href="/button">
        <Typography tag="h2">Button</Typography>
      </Link>
      <Link href="/text-field">Text-field</Link>
      <Link href="/select">Select</Link>
    </div>
  )
}
