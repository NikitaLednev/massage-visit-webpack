const path = require('path');
const webpack = require('webpack');
const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { context, entry, devtool, outputFolder, publicFolder } = require('./project.config');
const HMR = require('./hmr');
const getPublicPath = require('./publicPath');

module.exports = (options) => {
  console.log(options)
  const { dev, supportOldBrowsers } = options;
  const hmr = HMR.getClient();
  return {
    mode: dev ? 'development' : 'production',
    devtool: dev ? devtool : false,
    context: path.resolve(context),
    entry: {
      app: dev ? [hmr, entry.app] : entry.app
    },
    output: {
      path: path.resolve(outputFolder),
      publicPath: getPublicPath(publicFolder),
      filename: 'js/[name].js'
    },
    optimization: {
      splitChunks: {
          cacheGroups: {
              vendor: {
                  name: 'vendors',
                  test: /node_modules/,
                  chunks: 'all',
                  enforce: true
              }
          }
      },
      // runtimeChunk: dev,
      ...(!dev ? 
            {
              minimize: true,
              minimizer: [
                new TerserPlugin({
                  test: /\.js(\?.*)?$/i,
                }),
              ],
            } : [])


    },
    resolve: {
      extensions: [
        '.js', 
        '.css',
        '.scss',
        '.jpg',
        '.jpeg',
        '.png',
        '.svg',
      ]
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            ...(dev ? [{ loader: 'cache-loader' }] : []),
            { loader: 'babel-loader' }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
                ...(dev ? [
                  { 
                    loader: 'cache-loader' 
                  }, 
                  { 
                    loader: 'style-loader'
                  }
                ] : [ 
                  MiniCssExtractWebpackPlugin.loader 
                ]),
                {
                  loader: 'css-loader',
                  options: { 
                    sourceMap: true
                  }
                },
                { 
                  loader: 'postcss-loader', 
                  options: {
                    ident: 'postcss',
                    sourceMap: true,
                    config: { ctx: { dev, supportOldBrowsers } }
                  }
                },
                { 
                  loader: 'resolve-url-loader',
                },
                { 
                  loader: 'sass-loader',
                  options: { 
                      sourceMap: true
                  }
                }
              ]
          },
          {
            test: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|svg|ico|mp4|webm)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                }
              }
            ]
          }
      ]
    },
    plugins: [
      ...(dev ? [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new webpack.SourceMapDevToolPlugin({
          filename: '[file].map'
        }),
        new webpack.ProvidePlugin({
          $: "jquery/dist/jquery.min.js",
          jQuery: "jquery/dist/jquery.min.js",
        })
      ] : [
        new MiniCssExtractWebpackPlugin({
          filename: 'css/[name].css',
        }),
        new CopyWebpackPlugin([
          path.resolve(outputFolder)
        ], {
          allowExternal: true,
          beforeEmit: true
        }),
        new CopyWebpackPlugin([
          {
            from: path.resolve(`${context}/**/*`),
            to: path.resolve(outputFolder),
          }
        ], {
          ignore: ['*.js', '*.scss', '*.css']
        }),
      ])
    ]
  }
}
