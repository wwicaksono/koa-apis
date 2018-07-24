const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pathsToClean = [
  'client-dist',
];

const cleanOptions = {
  exclude: ['.gitkeep'],
  verbose: true,
};

module.exports = {
  context: __dirname,
  entry: {
    app: './client/src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client-dist'),
    compress: true,
    port: 3001,
    proxy: {
      '/v1': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      title: 'Development',
      inject: true,
      favicon: './client/public/favicon.ico',
      template: './client/public/index.html',
    }),
  ],
  output: {
    path: path.join(__dirname, 'client-dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
};
