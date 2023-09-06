import React from 'react'

import { Navigation } from '@/app/components/common/components/navigation'

export const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
