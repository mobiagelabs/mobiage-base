const controller = function (mbSidemenuService) {
	const vm = this;

	vm.openMenu = () => {
		mbSidemenuService.openMenu();
	};
};

export default controller;
