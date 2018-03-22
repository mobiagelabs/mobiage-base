module.exports = {
	plugins: [
		require('autoprefixer'),
		require('cssnano')({
			zindex: false,
			reduceIdents: false,
			preset: ['default', {
				discardComments: {
					removeAll: true
				}
			}]
		})
	]
};
