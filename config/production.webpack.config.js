// process.env.NODE_ENV = 'development';
// console.log('START');
process.env.NODE_ENV = 'production';

const HtmlWebPackPlugin = require("html-webpack-plugin");

// process.env.NODE_ENV = production;
config = {
  entry: "./src/js/common.js",
  output: {
    filename: "./dist/js/bundle.js"
  },
  // devServer: {
  //   contentBase: "./dist"
  // },
  module: {
    rules: [
      {   
        test: /\.sass$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: ["src/style.ssas", "dist/style.css"]
            }
        },
        ]
      },    
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ,
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
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
  ],
}
console.log('=>', config);

module.exports = config;