const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');

let mode = 'development';
process.env.NODE_ENV === 'production' ? (mode = 'production') : 'development';
const filename = (ext) => (mode === 'development' ? `[name].${ext}` : `[name].[contenthash].${ext}`);

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: '',
};
const PAGES_DIR = `${PATHS.src}/${PATHS.assets}`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.pug'));



module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src/js/scripts.js'),
	},
	mode: mode,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: filename('js'),
		clean: true,
	},
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		open: true,
		compress: true,
		hot: true,
		port: 4200,
	},
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
				test: /\.s[ac]ss$/,
				exclude: /node_modules/,
				use: [
					 mode === 'development' ? 'style-loader' :
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: path.resolve(__dirname, 'src'),
						},
					},

					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: path.resolve(__dirname, './postcss.config.js'),
								plugins: [
									[
										'postcss-preset-env',
										{
										},
									],
								],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							// webpackImporter: true,
						},
					},
					{
						loader: 'sass-resources-loader',
						options: {
							resources: path.resolve(__dirname, './src/scss/_variables.scss'),
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|ico)$/i,
				type: 'asset/resource',
				generator: {
					filename: mode === 'development' ? 'images/[name][ext]' : 'images/[hash][ext][query]',
					publicPath: './',
				},
			},
			{
				test: /\.(woff2?|ttf|eot)$/i,
				type: 'asset/resource',
				generator: {
					filename: mode === 'development' ? 'fonts/[name][ext]' : 'fonts/[hash][ext][query]',
					publicPath: './',
				},
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				exclude: /(node_modules|bower_components)/,
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: filename('css'),
			chunkFilename: '[id].css',
		}),
		...PAGES.map(
			(page) =>
				new HtmlWebpackPlugin({
					template: `${PAGES_DIR}/${page}`,
					filename: `./${page.replace(/\.pug/, '.html')}`,
					minify: {
						collapseWhitespace: mode === 'production' ? true : false,
						removeComments: mode === 'production' ? true : false,
					},
				}),
		),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
	],
};


