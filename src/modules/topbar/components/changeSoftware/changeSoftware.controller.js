const controller = ($scope, $timeout) => {
	$scope.state = {
		menuOpen: false,
		animationInProgress: false
	};

	const toggleAnimationInProgress = delay => {
		$scope.state.animationInProgress = true;
		$timeout(() => {
			$scope.state.animationInProgress = false;
		}, delay);
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
