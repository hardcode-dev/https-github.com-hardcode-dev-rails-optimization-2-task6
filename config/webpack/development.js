const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const environment = require('./environment');

environment.plugins.append(
  'BundleAnalyzerPlugin',
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: '../../tmp/report.html',
  }),
);
const config = environment.toWebpackConfig();

// For more information, see https://webpack.js.org/configuration/devtool/#devtool
config.devtool = 'eval-source-map';

module.exports = config;
