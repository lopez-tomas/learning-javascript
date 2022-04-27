const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin') ;
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    // assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
    }
  },
  module: {
    rules: [
      { // Babel
        test: /\.m?js$/, // to use any extension .mjs (modules) OR .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { // CSS
        test: /\.css|.styl$/i, // to use any .css file
        use: [MiniCssExtractPlugin.loader,
        'css-loader',
        'stylus-loader'
        ],
      },
      { // Images
        test: /\.png/, // to use any .png file
        type: 'asset/resource'
      },
      // { // Fonts
      //   test: /\.(woff|woff2)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       mimetype: "application/font-woff",
      //       name: "[name].[contenthash].[ext]",
      //       outputPath: "./assets/fonts/",
      //       publicPath: "../assets/fonts/",
      //       esModule: false,
      //     },
      //   }
      // },
      { // Fonts - Webpack 5
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    }),
    new Dotenv(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }
}