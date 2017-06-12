const path = require('path'); // for use in path.resolve()
var webpack = require('webpack');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    // use path.resolve() for Windows file system paths
    path: path.resolve(__dirname, "app/temp/scripts"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
