const controller = function (MbgPageLoader, $timeout) {
	const vm = this;
	vm.hide = true;
	vm.active = false;

	vm.open = () => {
		vm.hide = false;
		$timeout(() => {
			vm.active = true;
		}, 50);
	};

	vm.close = () => {
		vm.active = false;
		$timeout(() => {
			vm.hide = true;
		}, 500);
	};

	vm.$onInit = () => {
		MbgPageLoader.registerComponentCallback(vm.open, vm.close);
	};
};

export default controller;
