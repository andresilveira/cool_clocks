module.exports = {
  entry: "./index.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
