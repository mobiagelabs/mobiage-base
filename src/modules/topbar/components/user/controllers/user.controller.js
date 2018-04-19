const controller = function ($scope, $timeout, mbgBaseUserService) {
	$scope.changeZIndex = false;
	$scope.focus = '';
	$scope.menuOpen = false;
	$scope.hideUserContent = true;
	$scope.hideCompanyContent = true;
	$scope.animationInProgress = false;
	$scope.user = {};

	/* Função para limitar o tamanho de informações */
	$scope.maxSize = (info, maxSize, end) => {
		if (info !== undefined && info !== null) {
			if (info.length > maxSize) {
				/*
					End é uma opção para que seja possível escolher entre
					colocar as reticências no fim ou no meio da palavra.
				*/
				if (end === true) {
					return info.substr(0, maxSize - 3).concat('...');
				}
				return info.substr(0, (maxSize / 2) - 3).concat('...').concat(info.substr(-(maxSize / 2)));
			}
		}
		return info;
	};

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

	const toggleAnimationInProgress = (delay) => {
		$scope.animationInProgress = true;
		$timeout(() => {
			$scope.animationInProgress = false;
		}, delay);
	};

	$scope.focusCompany = () => {
		if ($scope.animationInProgress === false) {
			if ($scope.focus === 'user' || $scope.focus === '') {
				if ($scope.menuOpen === true) {
					$scope.toggleMenu();
					$timeout(() => {
						$scope.toggleMenu();
					}, 500);
				}
				$scope.focus = 'company';
				$timeout(() => {
					$scope.changeZIndex = true;
				}, 333);
				toggleAnimationInProgress(1000);
			} else {
				$scope.toggleMenu();
			}
		}
	};

	$scope.focusUser = () => {
		if ($scope.animationInProgress === false) {
			if ($scope.focus === 'company') {
				if ($scope.menuOpen === true) {
					$scope.toggleMenu();
					$timeout(() => {
						$scope.toggleMenu();
					}, 500);
				}
				$scope.focus = 'user';
				$timeout(() => {
					$scope.changeZIndex = false;
				}, 333);
				toggleAnimationInProgress(1000);
			} else {
				$scope.toggleMenu();
			}
		}
	};

	const onClickOutside = (evt) => {
		if (evt.toElement.classList[0] !== 'mb-tu-menu-company-change-acc') {
			$timeout(() => {
				$scope.toggleMenu();
			});
		}
	};

	$scope.toggleMenu = () => {
		if ($scope.animationInProgress === false) {
			if ($scope.menuOpen === false) {
				if ($scope.focus === 'company') {
					$scope.hideCompanyContent = false;
				} else {
					$scope.hideUserContent = false;
				}
				$timeout(() => {
					$scope.menuOpen = true;
					document.addEventListener('click', onClickOutside);
					toggleAnimationInProgress(500);
				}, 50);
			} else {
				$scope.menuOpen = false;
				document.removeEventListener('click', onClickOutside);
				toggleAnimationInProgress(500);
				if ($scope.focus === 'company') {
					$timeout(() => {
						$scope.hideCompanyContent = true;
					}, 500);
				} else {
					$timeout(() => {
						$scope.hideUserContent = true;
					}, 500);
				}
			}
		}
	};

	$scope.internalCallback = (action) => {
		console.log(`Realizando ação:`);
		if (action === 'changeAccount') {
			window.alert('PAN');
		}
	};

	this.$onInit = () => {
		mbgBaseUserService.setComponentCallback((user) => { $scope.user = user; });
		mbgBaseUserService.setUser(this.config);
		$scope.user = mbgBaseUserService.getUser();
	};
};

export default controller;
