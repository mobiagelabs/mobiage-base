const controller = function ($scope, $timeout, sideMenuService) {
	$scope.state = {
		menuOpen: false
	};

	let initialX = 0;
	let initialY = 0;
	let finalX = 0;
	let finalY = 0;

	const handleTouchStart = (evt) => {
		initialX = evt.changedTouches[0].screenX;
		initialY = evt.changedTouches[0].screenY;
	};

	const openMenu = () => {
		$timeout(() => {
			$scope.state.menuOpen = true;
		});
	};

	const closeMenu = () => {
		$timeout(() => {
			$scope.state.menuOpen = false;
		});
	};

	const handleTouchEnd = (evt) => {
		finalX = evt.changedTouches[0].screenX;
		finalY = evt.changedTouches[0].screenY;
		if (Math.abs(finalX - initialX) > Math.abs(finalY - initialY)) {
			// Movendo Horizontalmente
			if (Math.abs(finalX - initialX) > 200) {
				if (finalX - initialX > 0) {
					openMenu();
				} else {
					closeMenu();
				}
			}
		}
	};

	$scope.toggleMenu = () => {
		if (this.active === true) {
			this.active = false;
		} else {
			this.active = true;
		}
	};

	this.$onInit = () => {
		sideMenuService.setMenuConfig(this.config);
		sideMenuService.registerMenuCallback(openMenu, closeMenu);

		$scope.structure = this.config.structure;
		$scope.quickMenu = this.config.quickMenu;
		document.addEventListener('touchstart', handleTouchStart);
		document.addEventListener('touchend', handleTouchEnd);

		const element = document.getElementById('mb-sm-cc');
		$timeout(() => {
			window.OverlayScrollbars(element, {
				className: 'os-theme-thin-dark',
				scrollbars: {
					autoHide: 'scroll'
				}
			});
		}, 50);
	};

	this.$onDestroy = () => {
		document.removeEventListener('touchstart', handleTouchStart);
		document.removeEventListener('touchend', handleTouchEnd);
	};
};

export default controller;
