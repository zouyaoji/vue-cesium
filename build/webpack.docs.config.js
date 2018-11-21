const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: 'docs/main.js',
    libs: [
      'vue',
      'vue-router',
      'prismjs',
      'vue-material'
    ],
    resource: [
      'prismjs/themes/prism-tomorrow.css',
      'docs/fonts/iconfont.css'
    ],
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
        use: ['vue-markdown-loader'],
        exclude: [/node_modules/]
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
      docs: path.resolve(__dirname, '../docs')
    }
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          minSize: 30000,
          minChunks: 2,
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 10
        },
        libs: {
          name: 'libs',
          minSize: 30000,
          minChunks: 2,
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 5
        },
        resource: {
          name: 'resource',
          minSize: 30000,
          minChunks: 2,
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    // new VueLoaderPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/template/index.html'),
      chunks: ['libs', 'vendor', 'resource', 'main', 'manifest']
    }),
    new InlineManifestWebpackPlugin('manifest')
  ]
}
