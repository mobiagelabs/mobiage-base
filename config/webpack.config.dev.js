const path = require('path');
const merge = require('webpack-merge');
const commom = require('./webpack.config.common');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const exportName = 'mobiage-base';

module.exports = merge(
	commom,
	{
		output: {
			filename: `${exportName}.js`,
			path: path.resolve(__dirname, '../dist')
		},
		devtool: 'inline-source-map',
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../index.html') })
		],
		devServer: {
			publicPath: '/',
			contentBase: path.resolve(__dirname, '../'),
			port: 3000,
			host: '0.0.0.0',
			hot: true
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						{ loader: 'style-loader' },
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						{ loader: 'postcss-loader', options: { config: { path: path.resolve(__dirname, '../config/postcss.config.js') } } }
					]
				}
			]
		}
	}
);
