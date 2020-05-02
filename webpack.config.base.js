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
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        //如果是上述文件，就使用"file-loader"
        use: ["file-loader"],
        //把文件变成文件路径
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/i, //对所有的.scss文件使用以下方法编译
        use: [
          // Creates `style` nodes from JS strings
          //把js字符串变为style标签
          "style-loader",

          // Translates CSS into CommonJS
          //把css语法变为js字符串
          "css-loader",
          // Compiles Sass to CSS
          // "sass-loader",
          //把sass语言变为css语言
          //
          //"sass-loader"旧版本是"node-sass",新版本是"dart-sass"。
          //为了使用新版本"dart-sass"把字符串"sass-loader"改为如下对象↓
          {
            loader: "sass-loader",
            options: { implementation: require("dart-sass") }, //告诉"sass-loader"我要使用"dart-sass"
          },
        ],
      },
    ],
  },
};
