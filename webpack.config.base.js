const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  //   mode: "production", //用户产品模式,代码少
  //   mode: "development", //开发者模式

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
  ],
};
