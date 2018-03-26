const controller = function ($scope) {
	$scope.config = {};

	this.$onInit = () => {
		const findSideMenuLinks = data => {
			for (let i = 0; i < data.length; i += 1) {
				if (data[i].data === 'sideMenuLinks') {
					return true;
				}
			}
			return false;
		};

		if (this.config.search !== undefined && findSideMenuLinks(this.config.search.data) === true) {
			console.log(this.config);
		}

		$scope.config = this.config;
	};
};

export default controller;
