const controller = function (sideMenuService) {
	const vm = this;

	vm.openMenu = () => {
		sideMenuService.openMenu();
	};
};

export default controller;
