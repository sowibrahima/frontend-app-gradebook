const path = require('path');
const { createConfig } = require('@openedx/frontend-build');
const stripWutiskillParagonTheme = require('./webpack.wutiskill-theme');

const config = createConfig('webpack-dev');

config.resolve.modules = [
  path.resolve(__dirname, './src'),
  'node_modules',
];

config.module.rules[0].exclude = /node_modules\/(?!(query-string|split-on-first|strict-uri-encode|@edx))/;

config.devServer = {
  ...config.devServer,
  client: {
    ...config.devServer?.client,
    overlay: {
      errors: true,
      warnings: false,
    },
  },
};

stripWutiskillParagonTheme(config);

module.exports = config;
