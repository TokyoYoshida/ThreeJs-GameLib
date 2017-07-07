module.exports = {
  context: __dirname + '/source',
  entry: {
    'application': './es2015/application',
  },
  output: {
    path: __dirname + '/distribution/javascript',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};
