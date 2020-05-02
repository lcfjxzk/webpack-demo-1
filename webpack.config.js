const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const base = require("./webpack.config.base.js");

module.exports = {
  //   mode: "production", //用户产品模式,代码少
  ...base, //把base的所有属性抄到这里
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  mode: "development", //开发者模式

  module: {
    rules: [
      ...base.module.rules, //把base里面的module.rules拷贝过来，再加下面的内容
      {
        test: /\.css$/i, //如果发现了任何以.css结尾的文件名，就用"css-loader"把.css文件读到js里面，"style-loader"把style标签放到html里面。

        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       publicPath: "/public/path/to/",
        //     },
        //   },
        //   "css-loader",
        // ],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
