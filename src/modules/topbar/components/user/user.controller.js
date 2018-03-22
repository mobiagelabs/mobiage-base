const controller = ($scope, $timeout) => {
	$scope.changeZIndex = false;

	$scope.state = {
		focus: '',
		menuOpen: false,
		animationInProgress: false
	};

	const toggleAnimationInProgress = delay => {
		$scope.state.animationInProgress = true;
		$timeout(() => {
			$scope.state.animationInProgress = false;
		}, delay);
	};

	$scope.focusCompany = () => {
		if ($scope.state.animationInProgress === false) {
			$scope.state.focus = 'company';
			$timeout(() => {
				$scope.changeZIndex = true;
			}, 333);
			toggleAnimationInProgress(1000);
		}
	};

	$scope.focusUser = () => {
		if ($scope.state.animationInProgress === false) {
			if ($scope.state.focus === 'company') {
				$scope.state.focus = 'user';
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
		if ($scope.state.animationInProgress === false) {
			if ($scope.state.menuOpen === false) {
				$scope.state.menuOpen = true;
				document.addEventListener('click', onClickOutside);
				toggleAnimationInProgress(500);
			} else {
				$scope.state.menuOpen = false;
				document.removeEventListener('click', onClickOutside);
				toggleAnimationInProgress(500);
			}
		}
	};
};

export default controller;
