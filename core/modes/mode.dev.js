const path = require('path');
const webpack = require('webpack');
const browserSync = require('browser-sync').create();

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const { publicFolder, proxyTarget, watch } = require('../project.config');
const webpackConfig = require('../webpack.config')({ dev: true });
const getPublicPath = require('../publicPath');

const compiler = webpack(webpackConfig);


const middleware = [
  webpackDevMiddleware(compiler, {
    publicPath: getPublicPath(publicFolder),
    logLevel: 'silent',
    overlayWarnings: true

    // quiet: true
  }),
  webpackHotMiddleware(compiler, {
    log: false,
    logLevel: 'none',
    overlayWarnings: true
  })
]



browserSync.init({
  middleware,
  open: false,
  proxy: {
    target: proxyTarget,
    middleware
  },
  logLevel: 'silent',
  files: watch.map(element => path.resolve(element)),
  snippetOptions: {
    rule: {
      match: /<\/head>/,
      fn: function(snippet, match) {
        return `${snippet}${match}`;
      }
    }
  }
});

