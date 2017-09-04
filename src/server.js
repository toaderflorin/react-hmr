const webpack = require('webpack')
const WebpackWebServer = require('webpack-dev-server')
const config = require('../webpack.config')

new WebpackWebServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    "/api": "http://localhost:3000"  
  }
}).listen(8080, 'localhost', (err, result) => {
  console.log('Listening...')
})