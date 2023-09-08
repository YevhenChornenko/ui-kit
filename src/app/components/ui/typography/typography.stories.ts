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

export const H2: Story = {
  args: {
    children: 'H2 paragraph',
    tag: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'H3 paragraph',
    tag: 'h3',
  },
}

export const p: Story = {
  args: {
    children: 'paragraph',
    tag: 'p',
  },
}
