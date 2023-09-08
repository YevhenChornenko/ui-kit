import * as React from 'react'

import { TextField } from '@/app/components/ui/text-field'
import { Layout } from '@/layouts/root-layout'

const TextFieldPage = props => {
  return (
    <div>
      <Layout>
        <TextField type="email" label="email" placeholder="email" />
        <TextField type="password" label="password" placeholder="password" />
        <TextField type="search" label="search" placeholder="search" />
      </Layout>
    </div>
  )
}

export default TextFieldPage
