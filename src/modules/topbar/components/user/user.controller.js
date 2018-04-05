const controller = function ($scope, $timeout) {
	$scope.changeZIndex = false;
	$scope.focus = '';
	$scope.menuOpen = false;
	$scope.animationInProgress = false;
	$scope.user = {};

	$scope.getGreetings = () => {
		const date = new Date();
		const hora = date.getHours();
		if (hora >= 4 && hora < 12) {
			return 'Bom Dia,';
		} else if (hora >= 12 && hora <= 18) {
			return 'Boa Tarde,';
		}
		return 'Boa Noite,';
	};

	const toggleAnimationInProgress = delay => {
		$scope.animationInProgress = true;
		$timeout(() => {
			$scope.animationInProgress = false;
		}, delay);
	};

	$scope.focusCompany = () => {
		if ($scope.animationInProgress === false) {
			$scope.focus = 'company';
			$timeout(() => {
				$scope.changeZIndex = true;
			}, 333);
			toggleAnimationInProgress(1000);
		}
	};

	$scope.focusUser = () => {
		if ($scope.animationInProgress === false) {
			if ($scope.focus === 'company') {
				$scope.focus = 'user';
				$timeout(() => {
					$scope.changeZIndex = false;
				}, 333);
				toggleAnimationInProgress(1000);
			}
		}
	};

	const onClickOutside = () => {
		$timeout(() => {
			$scope.toggleMenu();
		});
	};

	$scope.toggleMenu = () => {
		if ($scope.animationInProgress === false) {
			if ($scope.menuOpen === false) {
				$scope.menuOpen = true;
				document.addEventListener('click', onClickOutside);
				toggleAnimationInProgress(500);
			} else {
				$scope.menuOpen = false;
				document.removeEventListener('click', onClickOutside);
				toggleAnimationInProgress(500);
			}
		}
	};

	this.$onInit = () => {
		$scope.user = this.config;
	};
};

export default controller;
