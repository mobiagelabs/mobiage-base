const controller = function ($scope, $timeout, mbgBaseUserService) {
	$scope.changeZIndex = false;
	$scope.focus = '';
	$scope.menuPage = 'user';
	$scope.menuOpen = false;
	$scope.hideUserContent = true;
	$scope.hideCompanyContent = true;
	$scope.hideChangeAccountContent = true;
	$scope.animationInProgress = false;
	$scope.user = {};
	$scope.organizationSelected = undefined;

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
					$scope.closeMenu();
					$timeout(() => {
						$scope.openMenu('company');
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
					$scope.closeMenu();
					$timeout(() => {
						$scope.openMenu('user');
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

	const onClickOutside = () => {
		$timeout(() => {
			$scope.toggleMenu();
		});
	};

	$scope.toggleMenu = () => {
		if ($scope.animationInProgress === false) {
			if ($scope.menuOpen === false) {
				if ($scope.focus === 'company') {
					$scope.openMenu('company');
				} else {
					$scope.openMenu('user');
				}
			} else {
				$scope.closeMenu();
			}
		}
	};

	$scope.openMenu = (page) => {
		if (page === 'user') {
			$scope.menuPage = 'user';
			$scope.hideUserContent = false;
			$timeout(() => {
				$scope.menuOpen = true;
				document.addEventListener('click', onClickOutside);
				toggleAnimationInProgress(500);
			}, 50);
		} else if (page === 'company') {
			$scope.menuPage = 'company';
			$scope.hideCompanyContent = false;
			$timeout(() => {
				$scope.menuOpen = true;
				document.addEventListener('click', onClickOutside);
				toggleAnimationInProgress(500);
			}, 50);
		} else if (page === 'changeAccount') {
			$scope.menuPage = 'changeAccount';
			$scope.hideChangeAccountContent = false;
			$timeout(() => {
				$scope.menuOpen = true;
				document.addEventListener('click', onClickOutside);
				toggleAnimationInProgress(500);
			}, 50);
		}
	};

	$scope.closeMenu = () => {
		document.removeEventListener('click', onClickOutside);
		$scope.organizationSelected = undefined;
		$scope.menuOpen = false;
		$scope.menuPage = 'user';
		$timeout(() => {
			$scope.hideUserContent = true;
			$scope.hideCompanyContent = true;
			$scope.hideChangeAccountContent = true;
		}, 500);
	};

	$scope.openChangeAccount = () => {
		$scope.focusCompany();
		$scope.closeMenu();
		$timeout(() => {
			$scope.openMenu('changeAccount');
		}, 500);
	};

	$scope.backChangeAccount = () => {
		$scope.closeMenu();
		$timeout(() => {
			$scope.openMenu('company');
		}, 500);
	};

	$scope.internalCallback = (action) => {
		if (action === 'changeAccount') {
			$scope.openChangeAccount();
		}
		$scope.closeMenu();
	};

	$scope.stopPropagation = (evt) => {
		evt.stopPropagation();
	};

	$scope.selectOrganization = (index) => {
		$scope.organizationSelected = index;
	};

	$scope.changeOrganization = () => {
		if ($scope.organizationSelected !== undefined) {
			$scope.user.changeOrganizationAction($scope.user.otherOrganizations[$scope.organizationSelected]);
		}
	};

	this.$onInit = () => {
		mbgBaseUserService.setComponentCallback((user) => { $scope.user = user; });
		mbgBaseUserService.setUser(this.config);
		$scope.user = mbgBaseUserService.getUser();
	};
};

export default controller;
