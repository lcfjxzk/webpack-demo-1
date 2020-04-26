var path = require("path");

module.exports = {
  mode: "production", //用户产品模式,代码少
  //mode:"development",//开发者模式
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
  },
};
