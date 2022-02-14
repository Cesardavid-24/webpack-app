const Htmlwebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const copyPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {

  mode: "development",

  entry: "./src/index.js",
  //------------------------------------------------------------------------
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  //-----------------------------HTML module---------------------------------
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
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
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
       
      },
    ],
  },

  optimization: {},

  plugins: [
    new Htmlwebpack({
      template: './src/index.html',
      filename: './index.html'
  }),
    new MiniCssExtract({
      filename: "[name].css",
    }),

    new copyPlugin({
      patterns: [
        {from: 'src/assets', to: 'assets'}
      ]
    })
  ],
};
