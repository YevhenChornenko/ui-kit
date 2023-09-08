import * as React from 'react'

import { Button } from '@/app/components/ui/button'
import { Typography } from '@/app/components/ui/typography'
import { Layout } from '@/layouts/root-layout'

const ButtonPage = props => {
  return (
    <div>
      <Layout>
        <Typography tag="h1">Button</Typography>
        <Button>Button</Button>
      </Layout>
    </div>
  )
}

export default ButtonPage
