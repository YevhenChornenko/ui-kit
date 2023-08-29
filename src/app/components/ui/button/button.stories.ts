import type { StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    isDisabled: false,
    fullWidth: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    isDisabled: false,
    fullWidth: false,
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    isDisabled: false,
    fullWidth: false,
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
    isDisabled: false,
    fullWidth: false,
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    isDisabled: false,
    fullWidth: true,
  },
}
