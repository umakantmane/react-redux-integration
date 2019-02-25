const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      historyApiFallback:true,
      inline: true,
      port: 8082
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}