module.exports = {
  context: 'assets',
  entry: {
    // styles: './',
    app: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  outputFolder: '../assets',
  publicFolder: 'assets',
  proxyTarget: 'http://massage-visit.cc/',
  watch: [
    '../**/*.php'
  ]
}