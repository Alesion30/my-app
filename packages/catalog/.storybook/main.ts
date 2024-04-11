import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    {
      directory: '../../shadcn/src/',
      files: '**/*.stories.@(jsx|tsx|mdx)',
      titlePrefix: 'shadcn',
    },
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      include: ['../../**/*.tsx'],
    },
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins || []), tsconfigPaths()],
    };
  },
};

export default config;
