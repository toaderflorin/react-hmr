const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    "babel-polyfill",
    "webpack-dev-server/client?http://localhost:9000",
    "webpack/hot/only-dev-server",
    "react-hot-loader/patch",
    "./src/static/app/index.jsx"
  ],
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
  ],
  devServer: {  
    proxy: {
      '*': 'http://localhost:3000'
    },
    hot: true,
    contentBase: './src/static', 
    port: 80     
  }
}