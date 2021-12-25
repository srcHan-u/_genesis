const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
  assets: 'pages/',
};

const PAGES_DIR = `${PATHS.src}/${PATHS.assets}`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.pug'));

console.log(mode + ': mode');
console.log(PATHS);
console.log(PAGES_DIR);
console.log(PAGES);

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/scripts.js'),
  },
  mode: mode,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: ['pages/index.html'],
    liveReload: true,
    compress: true,
    port: 4600,
  },
  devtool: 'source-map',
  stats: {
    children: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff2?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: {
            caseSensitive: true,
            conservativeCollapse: true,
            keepClosingSlash: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false,
            collapseWhitespace: false,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
          },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        //   use:[
        //       {loader: 'html-loader'},
        //       {loader: 'pug-html-loader'},
        //   ],
        //   options:{
        //       pretty: true,
        //   },
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      fileName: 'index.html',
    }),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `pages/${page.replace(/\.pug/, '.html')}`,
        }),
    ),
  ],
};
