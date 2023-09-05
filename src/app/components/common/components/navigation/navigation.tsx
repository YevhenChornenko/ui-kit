import React from 'react'

import Link from 'next/link'

export const Navigation = () => {
  return (
    <div>
      <Link href="/button">Button</Link>
      <Link href="/text-field">Text-field</Link>
      <Link href="/select">Select</Link>
    </div>
  )
}
