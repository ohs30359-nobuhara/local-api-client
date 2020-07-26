const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
  mode: 'development',
  entry: './src/application.ts',
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/,
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ],
    extensions: ['.ts']
  },
  output: {
    filename: 'gui.js',
    path: path.resolve(`${__dirname}/../`, './dist')
  },
}