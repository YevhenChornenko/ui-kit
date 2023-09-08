import type { StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children: 'H1 paragraph',
    tag: 'h1',
  },
}
