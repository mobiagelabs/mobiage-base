const controller = ($scope, $timeout) => {
	$scope.changeZIndex = false;
	$scope.focus = '';
	$scope.menuOpen = false;
	$scope.animationInProgress = false;

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
};

export default controller;
