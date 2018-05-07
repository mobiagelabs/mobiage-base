const controller = function () {
	const vm = this;
	vm.click = () => {
		if (vm.actionType === 'function') {
			vm.action();
			vm.closeMenu();
		} else if (vm.actionType === 'internal') {
			vm.internalCallback({ action: vm.action });
		} else {
			vm.closeMenu();
		}
	};
};

export default controller;
