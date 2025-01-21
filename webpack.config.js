import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/frontend/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
  },
  mode: 'development',
  resolve: {
    alias: {
      fs: '@zenfs/core',
      'node:fs': '@zenfs/core',
      'node:path': 'path-browserify',
      path: 'path-browserify',
      process: 'process/browser',
      'node:process': 'process/browser',
    },
    fallback: {
      os: 'os-browserify/browser',
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
    },
  },
  externals: [
    '@sqlite.org/sqlite-wasm',
    'nunjucks',
    'chokidar',
    'arweave'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: './public',
    port: 8080,
  },
};
