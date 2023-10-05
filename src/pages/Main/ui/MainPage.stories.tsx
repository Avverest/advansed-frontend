import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
