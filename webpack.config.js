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
    fallback: {
      fs: false, // Disable `fs` for browser
      os: 'os-browserify/browser',
      path: 'path-browserify',
      process: 'process/browser',
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
    },
  },
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
