const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/static/app/index.jsx',

  // entry: [
  //   "webpack-dev-server/client?http://localhost:8080", // WebpackDevServer host and port
  //   // "webpack/hot/only-dev-server", // "only" stops HMR on syntax errors
  //   // "react-hot-loader/patch", // make sure the HMR package is included
  //   "./src/index" // our application entry point
  // ],
  output: {
    path: path.resolve(__dirname, 'src/static'),
    filename: 'bundle.js',
  }, 
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
