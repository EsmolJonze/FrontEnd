const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostCSSModules = require('postcss-modules-values');
const { DefinePlugin } = require('webpack');

const HOST = process.env.HOST || 'localhost';
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const IS_DEVELOP = process.env.NODE_ENV !== 'production';
const NODE_ENV = process.env.NODE_ENV || 'development';
const REACT_APP_VERSION = process.env.REACT_APP_VERSION || 'unversioned';
const ENV = process.env.ENV || null;

module.exports = {
  mode: IS_DEVELOP ? 'development' : 'production',
  devtool: IS_DEVELOP ? 'eval' : 'source-map',
  context: __dirname,
  entry: './src/index.js',
  target: 'web',
  devServer: {
    stats: 'errors-only',
    host: HOST,
    allowedHosts: [HOST],
    port: DEFAULT_PORT,
    historyApiFallback: true,
    open: true,
    hot: true,
    clientLogLevel: 'trace',
    onListening(server) {
      const port = server.listeningApp.address().port;
      console.info('Starting the development server on port: ', port, '\n');
    },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: IS_DEVELOP ? [require.resolve('react-refresh/babel')] : [],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        include: path.resolve('src'),
        test: /\.(png|jpe?g|gif)$/,
        use: 'url-loader',
      },
      {
        include: path.resolve('src'),
        test: /\.svg$/,
        use: ['@svgr/webpack', 'svg-url-loader'],
      },
      {
        include: path.resolve('src'),
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        REACT_APP_VERSION: JSON.stringify(REACT_APP_VERSION),
        ENV: JSON.stringify(ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      filename: 'index.html',
    }),
    PostCSSModules,
    IS_DEVELOP ? new ReactRefreshWebpackPlugin({ overlay: false }) : null,
  ].filter(Boolean),
};
