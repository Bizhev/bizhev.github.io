const path = require('path');
process.env.NODE_ENV = 'development';
// import Icon from './icon.png';

let distPaths = {
  // dist - original path
  // doc - for github pages
  root: "docs"
}

const HtmlWebPackPlugin = require("html-webpack-plugin");

config = {
  entry: "./src/js/common.js",
  output: {
    path:  path.join(__dirname, "../"+distPaths.root),
    filename: "./js/bundle.js",
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, distPaths.root),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {   
        test: /\.sass$/,
        use: [{loader: "style-loader"}, 
              {loader: "css-loader"}, 
              {loader: "sass-loader",
                options: { includePaths: ["src/style.ssas", distPaths+"/css/style.css"]}
              },
             ]
      },    
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      }
    ,
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {loader: "babel-loader"}
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
      // { test: /\.ts$/, use: "ts-loader" },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // }
    ]},
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    // new ExtractTextPlugin('bundle.css')
  ],
}

module.exports = config;