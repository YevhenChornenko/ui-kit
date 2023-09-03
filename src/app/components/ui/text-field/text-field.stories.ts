import type { StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    type: 'text',
  },
}
