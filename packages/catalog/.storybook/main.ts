import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    {
      directory: '../../ui/src',
      files: '**/*.stories.@(jsx|tsx|mdx)',
      titlePrefix: 'ui',
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
  // async viteFinal(config) {
  //   const { mergeConfig } = await import('vite');

  //   return mergeConfig(config, {
  //     resolve: {
  //       alias: { '@': path.resolve(path.dirname(__dirname), 'src') },
  //     },
  //   });
  // },
};

export default config;
