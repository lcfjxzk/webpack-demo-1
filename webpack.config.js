const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  //   mode: "production", //用户产品模式,代码少
  mode: "development", //开发者模式
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      //plugins,插件,外挂
      title: "XDML - 写代码啦",
      template: "src/assets/index.html", //template,模板
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, //如果发现了任何以.css结尾的文件名，就用"css-loader"把.css文件读到js里面，"style-loader"把style标签放到html里面。

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/public/path/to/",
            },
          },
          "css-loader",
        ],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },
};
