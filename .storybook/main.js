const deepmerge = require('deepmerge')
const path = require('path')

const customWebpackConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src')
    }
  }
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@kritzel-ui'] = path.resolve(__dirname, '../dist/')
    config.resolve.alias['@src'] = path.resolve(__dirname, '../src')
    return config
  }
}
