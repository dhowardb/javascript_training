const path = require("path");
// const CleanPugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "[contenthash].js", //dynamic prod
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
    clean: true,
  },
  devtool: "cheap-source-map",
  //   plugins: [new CleanPugin.CleanWebpackPlugin()],
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
