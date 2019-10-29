const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const blockName = 'vue-filename-injector'
module.exports = {
  entry: {
    main: 'docs/main.js',
    libs: ['vue', 'vue-router', 'prismjs', 'vue-material'],
    vendor: [
      'docs/components/App.vue',
      'docs/components/CateView.vue',
      'docs/components/DocPreview.vue',
      'docs/components/Navigator.vue',
      'docs/components/RootFrame.vue'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader', 'eslint-loader'],
        exclude: [/_cache/]
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: [/node_modules/, /md/]
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    alias: {
      docs: path.resolve(__dirname, '../docs'),
      '@': path.resolve(__dirname, '../src')
    }
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        libs: {
          name: 'libs',
          minSize: 30000,
          minChunks: 2,
          chunks: 'initial',
          reuseExistingChunk: true,
          priority: 10
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          minSize: 30000,
          minChunks: 2,
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 20
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/template/index.html'),
      chunks: ['vendor', 'libs', 'main', 'manifest']
    }),
    new InlineManifestWebpackPlugin('manifest'),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../docs/statics'),
        to: 'statics',
        ignore: ['.*']
      }
    ])
  ]
}
