const path = require('path')
const APP_DIR = path.join(__dirname,'src','client')
const BUILD_DIR = path.join(__dirname,'src','public')

module.exports = {
  mode: 'development',
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 80
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[name].[hash].[ext]',
          }
        }
      }
    ]
  }
}