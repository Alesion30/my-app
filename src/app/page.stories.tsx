import type { Meta, StoryObj } from '@storybook/react';
import Home from './page';

const meta: Meta<typeof Home> = {
  component: Home,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: () => {
    return <Home />;
  },
};

export default meta;
