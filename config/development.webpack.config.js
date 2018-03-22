const path = require('path');
process.env.NODE_ENV = 'development';
// import Icon from './icon.png';

const HtmlWebPackPlugin = require("html-webpack-plugin");

config = {
  entry: "./src/js/common.js",
  output: {
    path:  path.join(__dirname, "../dist"),
    filename: "./js/bundle.js",
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
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
                options: { includePaths: ["src/style.ssas", "dist/css/style.css"]}
              },
             ]
      },    
      {
        test: /\.html$/,
        use: [{
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
        use: [{
          loader: 'file-loader', options: {
            name: '[path][name].[ext]'
          }  }]
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