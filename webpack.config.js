const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
      }),
    ],
    module: {
      rules: [
        {
         test: /\.s[ac]ss$/,
         use: [
          'style-loader',
          'css-loader',
          'sass-loader',
         ],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
};