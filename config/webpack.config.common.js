const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: ['babel-loader']
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: '/',
						outputPath: 'assets/img/'
					}
				}]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: '/',
						outputPath: 'assets/fonts/'
					}
				}]
			}
		]
	},
	externals: {
		angular: 'angular'
	}
};
