const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', '@babel/polyfill', './js/main.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'script.js',
  },
};
