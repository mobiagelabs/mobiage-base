const controller = function ($scope) {
	$scope.findAction = () => {
		const action = this.action;
		console.log(action);
	};
};

export default controller;
