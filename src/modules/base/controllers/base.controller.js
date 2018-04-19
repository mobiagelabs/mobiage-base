const controller = function ($scope, hotkeys, $timeout) {
	$scope.topage = false;

	this.$onInit = () => {
		hotkeys.bindTo($scope).add({
			combo: 't o p a g e enter enter',
			callback() {
				$timeout(() => {
					$scope.topage = true;
					$timeout(() => {
						$scope.topage = false;
					}, 5000);
				});
			}
		});
	};
};

export default controller;
