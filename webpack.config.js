const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const assets = [
  "bootstrap/dist/css/bootstrap.min.css",
  "bootstrap/dist/css/bootstrap-theme.min.css",
  "bootstrap/dist/css/bootstrap.min.css.map",
  "bootstrap/dist/css/bootstrap-theme.min.css.map",
  "bootstrap-table/dist/bootstrap-table.min.css",
];

module.exports = {
  mode: "development",
  entry: {
    pool: "./src/pool.js",
    map: "./src/map.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.ProvidePlugin({
      jquery: "jquery",
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyPlugin({
      patterns: assets.map((asset) => {
        return {
          from: path.resolve(__dirname, `./node_modules/${asset}`),
          to: path.resolve(__dirname, "./dist/assets/css"),
        };
      }),
    }),
  ],
};
