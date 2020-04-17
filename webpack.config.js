const webpack = require('webpack');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const ENV = NODE_ENV === 'production' ? 'production' : 'staging';

const version = 'v1'
const dist = `dist/${ENV}`;
const STORAGE_PATH = `http://localhost:8001/${dist}/remote/${version}`

const manifest =
    NODE_ENV === 'production'
        ? 'manifest.production.json'
        : 'manifest.staging.json';

module.exports = {
  entry: {
    'app/popup': path.join(__dirname, "src/app/popup.ts"),
    'app/background': path.join(__dirname, "src/app/background.ts"),
    [`remote/${version}/popup`]: path.join(__dirname, "src/remote/popup/index.tsx"),
    [`remote/${version}/background`]: path.join(__dirname, "src/remote/background/index.ts")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, dist)
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"]
  },
  plugins: [
    new webpack.DefinePlugin({
      STORAGE_URL: JSON.stringify(STORAGE_PATH),
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src', 'app', manifest),
        to: path.join(__dirname, dist, 'app', 'manifest.json')
      },
      {
        from: path.join(__dirname, 'src', 'app', 'html', '*.html'),
        to: path.join(__dirname, dist),
        context: 'src'
      },
      {
        from: path.join(__dirname, 'src', 'app', 'assets', '**', '*'),
        to: path.join(__dirname, dist),
        context: 'src'
      }
    ],
    { copyUnmodified: true })
  ]
};
