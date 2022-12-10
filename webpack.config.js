const path = require("path");
// const CleanPugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
    clean: true,
  },
  devtool: "eval-cheap-module-source-map",
  // plugins: [new CleanPugin.CleanWebpackPlugin()],
  // this is default
  // devServer: {
  //   contentBase: "./",
  // },
  devServer: {
    static: {
      directory: "./",
    },
  },
};
