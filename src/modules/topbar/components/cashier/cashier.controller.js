const controller = ($scope, CashierService, $state) => {
	$scope.setting = {};

	$scope.updateComponent = () => {
		$scope.setting = CashierService.configCashier;
	};

	$scope.goCashierState = () => {
		if ($scope.setting.open) {
			$scope.setting.closeState();
		} else {
			$scope.setting.openState();
		}
	};

	$scope.cashierIsEmpty = () => angular.equals($scope.setting, {});

	CashierService.registerCashier($scope.updateComponent);
};

export default controller;
