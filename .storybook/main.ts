const config = {
  staticDirs: ['../public'],
  // stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    // '@storybook/addon-links',
    '@storybook/addon-essentials'
    // '@storybook/addon-onboarding',
    // '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
