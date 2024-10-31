// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Set to 'production' for production build
  entry: "./src/index.js", // Entry point for bundling
  output: {
    filename: "bundle.js", // Name of the output bundle
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Cleans the output directory before each build
  },
  devtool: "inline-source-map", // Helps with debugging
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Use 'static' instead of 'contentBase'
    },
    open: true, // Automatically opens the browser
    hot: true, // Enables Hot Module Replacement
    port: 9000, // Port for the development server
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Processes .css files
        use: ["style-loader", "css-loader"], // Loads CSS into the DOM
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Processes image files
        type: "asset/resource", // Loads images as assets
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template file for HTML
      filename: "index.html", // Output filename
    }),
  ],
};
