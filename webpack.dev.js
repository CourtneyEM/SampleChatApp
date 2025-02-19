const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ESLintPlugin = require('eslint-webpack-plugin');

const eslintOptions = { fix: true, extensions: ['js', 'jsx', 'ts', 'tsx'] };

const config = () => {
  return {
    mode: "development",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
      historyApiFallback: true,
      https: true,
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [new ESLintPlugin(eslintOptions)]
  }
};

module.exports = (env) => merge(common(env), config());