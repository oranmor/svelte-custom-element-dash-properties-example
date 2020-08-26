const path = require('path');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: { 'my-custom-component' : ['./src/MyCustomComponentWrapper.js'] },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: __dirname + '/build',
    filename: 'my-custom-component.js'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            customElement: true
          }
        }
      }
    ]
  },
  mode,
  devtool: mode === 'production' ? false : 'source-map'
};
