import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Destructive',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

export default meta;
