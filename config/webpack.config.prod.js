const path = require('path');
const merge = require('webpack-merge');
const commom = require('./webpack.config.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const exportName = 'mobiage-base.min';

module.exports = merge(
	commom,
	{
		output: {
			filename: `${exportName}.js`,
			path: path.resolve(__dirname, '../dist')
		},
		devtool: 'source-map',
		plugins: [
			new ExtractTextPlugin({ filename: `${exportName}.css` }),
			new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
			new UglifyJSPlugin({ sourceMap: true, uglifyOptions: { mangle: false } })
		],
		module: {
			rules: [
				{
					test: /\.css$/,
					use:
						ExtractTextPlugin.extract({
							use: [
								{ loader: 'css-loader', options: { importLoaders: 1 } },
								{ loader: 'postcss-loader', options: { config: { path: path.resolve(__dirname, '../config/postcss.config.js') } } }
							]
						})
				}
			]
		}
	}
);
