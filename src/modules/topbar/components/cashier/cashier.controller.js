const controller = ($scope, CashierService, $state) => {
	$scope.setting = {};

	$scope.updateComponent = () => {
		$scope.setting = CashierService.configCashier;
	};

	$scope.goCashierState = () => {
		if ($scope.setting.open) {
			$state.go($scope.setting.closeState);
		} else {	
			$state.go($scope.setting.openState);
		}
	};

	CashierService.registerCashier($scope.updateComponent);
};

export default controller;
