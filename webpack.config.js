const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  devtool: "nosources-source-map",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        //test: /\.tsx?$/,
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          //MiniCssExtractPlugin.loader, 
          "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          //MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./docs"),
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Hieu Ocb" }),
    //new MiniCssExtractPlugin(),
  ],
};