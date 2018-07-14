const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    stats: 'errors-only',
    historyApiFallback: true,
    quiet: true,
    hotOnly: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    compress: true
  },
  optimization: {
    splitChunks: {
      chunks: 'initial'
    },
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true, parallel: true })],
    runtimeChunk: {
      name: 'manifest'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: { minimize: true }
              }
            ]
          },
          {
            test: /\.css$/,
            exclude: /node_modules\/(?!(sanitize.css|normalize.css)\/).*/,
            oneOf: [
              {
                resourceQuery: /^\?raw$/,
                use: ['style-loader', 'css-loader']
              },
              {
                use: [
                  'css-hot-loader',
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    query: {
                      modules: true,
                      localIdentName:
                        '[path]___[name]__[local]___[hash:base64:5]',
                      minimize: true
                    }
                  },
                  {
                    loader: require.resolve('postcss-loader'),
                    options: {
                      sourceMap: true,
                      ident: 'postcss',
                      plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-cssnext')
                      ]
                    }
                  },
                  'resolve-url-loader'
                ]
              }
            ]
          },
          {
            test: /\.scss$/,
            exclude: /node_modules\/(?!(sanitize.css|normalize.css)\/).*/,
            oneOf: [
              {
                resourceQuery: /^\?raw$/,
                use: ['style-loader', 'css-loader']
              },
              {
                use: [
                  'css-hot-loader',
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    query: {
                      // modules: true,
                      // localIdentName:
                      //   '[path]___[name]__[local]___[hash:base64:5]',
                      minimize: true
                    }
                  },
                  {
                    loader: require.resolve('postcss-loader'),
                    options: {
                      sourceMap: true,
                      ident: 'postcss',
                      plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-cssnext')
                      ]
                    }
                  },
                  'resolve-url-loader'
                ]
              }
            ]
          },
          {
            test: /\.svg/,
            use: {
              loader: 'svg-url-loader'
            }
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /node_modules/],
            use: {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['build']),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new ResourceHintWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      persistentCache: false,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
