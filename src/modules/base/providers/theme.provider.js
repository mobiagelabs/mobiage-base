import themes from './themes.list';

const service = function () {
	const getColors = (theme) => themes[theme];

	return {
		getColors,
		$get: () => ({ getColors })
	};
};

export default service;
