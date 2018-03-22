const controller = function ($scope, $timeout, hotkeys) {
	$scope.state = {
		quickMenuOpen: false,
		animationInProgress: false,
		menuBottomY: 0
	};

	const toggleAnimationInProgress = () => {
		$scope.state.animationInProgress = true;
		$timeout(() => {
			$scope.state.animationInProgress = false;
		}, 475);
	};

	const toggleMenuBottom = state => {
		if (state === true) {
			$scope.state.menuBottomY = (this.config.links.length * 33) + 5;
		} else {
			$scope.state.menuBottomY = 0;
		}
	};

	const onClickOutside = () => {
		$timeout(() => {
			$scope.toggleQuickMenu();
		});
	};

	$scope.toggleQuickMenu = () => {
		if ($scope.state.animationInProgress === false) {
			if ($scope.state.quickMenuOpen === true) {
				$scope.state.quickMenuOpen = false;
				toggleMenuBottom($scope.state.quickMenuOpen);

				document.removeEventListener('click', onClickOutside);

				toggleAnimationInProgress();
			} else if ($scope.state.quickMenuOpen === false) {
				$scope.state.quickMenuOpen = true;

				document.addEventListener('click', onClickOutside);

				toggleMenuBottom($scope.state.quickMenuOpen);
				toggleAnimationInProgress();
			}
		}
	};

	this.$onInit = () => {
		const { hotkey } = this.config;
		if (hotkey && hotkey.length > 0) {
			hotkeys.bindTo($scope).add({
				combo: hotkey,
				callback: $scope.toggleQuickMenu
			});
		}
	};

	this.$onDestroy = () => {
		document.removeEventListener('click', onClickOutside);
	};
};

export default controller;
