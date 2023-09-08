import React from 'react'

import s from './root-layout.module.scss'

import { Navigation } from '@/app/components/common/components/navigation'

export const Layout = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.nav}>
        <Navigation />
      </div>
      <hr />
      <div className={s.main}>{children}</div>
    </div>
  )
}
