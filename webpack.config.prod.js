const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
//生产环境的config有三个代码与config.base不同
//1.mode不一样,2.plugins多一个提取css的插件,3.use不一样
const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "production", //生产模式,代码少
  // mode: "development", //开发者模式

  plugins: [
    ...base.plugins,

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
