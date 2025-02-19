const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: path.resolve(__dirname, 'src', 'index'),
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, 'src/assets/'),
        Pages: path.resolve(__dirname, 'src/pages/'),
        Shared: path.resolve(__dirname, 'src/shared/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Mocks: path.resolve(__dirname, 'src/mocks/')
      },
      extensions: ['.js', '.jsx', '.scss', '.json', '.ts', '.tsx'],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      crossOriginLoading: 'anonymous',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components|build)/,
          use: { loader: 'babel-loader' }
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules|bower_components|build)/,
          use: { loader: 'ts-loader' }
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jp(e*)g|gif|webp|svg)$/,
          use: {
            loader: 'file-loader',
            options: 'images/[hash]-[name].[ext]'
          },
        },
      ],
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          assets: {
            test: /[\\/]src[\\/](assets)[\\/]/,
            name: 'assets',
            chunks: 'all'
          }
        }
      }
    },
    ignoreWarnings: [/Failed to parse source map/],
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: 'index.html'
      }),
    ],
  }
};