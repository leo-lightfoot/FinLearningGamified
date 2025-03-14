const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  // Add the Babel plugin for MobX decorators
  addBabelPlugin(['@babel/plugin-proposal-decorators', { legacy: true }])
);
