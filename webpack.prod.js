const Htmlwebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const path = require("path");
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser       = require('terser-webpack-plugin');

module.exports = {
  mode: "production",

  entry: "./src/index.js",
  //------------------------------------------------------------------------
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: 'main.[fullhash].js',
    clean: true,
  },
  //-----------------------------HTML module---------------------------------
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
      },
      },
      //-------------------CSS module------------------------------------------
      {
        test: /\.css$/i,
        exclude: /style.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /style.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      //--------------file moduele---------
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },

  optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizer(),
        new Terser(),
      ],
  },

  plugins: [
    new Htmlwebpack({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtract({
      filename: "[name].[fullhash].css",
    }),
  ],
};
