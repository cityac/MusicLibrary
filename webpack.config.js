module.exports = {
  output: {
    filename: "bundle.js"
  },

  devtool: "sourcemap",

  module: {
    loaders: [
      {
        test: [
          /ui-grid\.svg/,
          /ui-grid\.eot/,
          /ui-grid\.ttf/,
          /ui-grid\.woff/,
          /ui-grid\.woff2/
        ],
        use: "file-loader?name=fonts/[name].[ext]",
        loader: "raw"
      },
      { test: /\.html$/, loader: "raw" },
      { test: /\.styl$/, loader: "style!css!stylus" },
      { test: /\.css/, loader: "style!css" },
      { test: /\.(png|jpg|jpeg)$/, loader: "file" },
      {
        test: /\.js$/,
        loader: "babel",
        exclude: [/client\/lib/, /node_modules/, /\.spec\.js/]
      }
    ]
  },

  stylus: {
    use: [require("jeet")(), require("rupture")()]
  }
};
