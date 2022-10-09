const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  devServer: {
    static: './dist',
    port: 3000,
    compress: true,
    client: {
      progress: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'City Builder',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
}

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'eval-source-map'
}

module.exports = config