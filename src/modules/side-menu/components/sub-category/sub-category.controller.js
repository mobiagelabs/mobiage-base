const controller = function () {
	const vm = this;
	vm.opened = false;
	vm.btnHeight = 25;

	vm.toggle = () => {
		if (vm.opened === true) {
			vm.opened = false;
		} else {
			vm.opened = true;
		}
	};
};

export default controller;
