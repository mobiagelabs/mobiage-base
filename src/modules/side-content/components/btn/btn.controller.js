const controller = function (MbgSideContent, $timeout) {
	const vm = this;
	const btnHeight = 93;
	vm.top = 0;
	vm.right = 0;
	vm.active = false;

	vm.updateBtn = (stackLvl, bufferLength) => {
		vm.top = -(((bufferLength - 1) * btnHeight) / 2) + (stackLvl * btnHeight);
	};

	vm.open = () => {
		$timeout(() => {
			vm.right = -400;
			vm.active = true;
		});
	};

	vm.close = () => {
		vm.right = 0;
		vm.active = false;
	};

	vm.toggleContent = (evt) => {
		evt.stopPropagation();

		if (vm.active === true) {
			vm.close();
		} else {
			vm.open();
		}
		vm.toggleFn();
	};

	vm.$onInit = () => {
		MbgSideContent.registerBtn({ update: vm.updateBtn, config: vm.config });
	};

	vm.$onChanges = (changes) => {
		if (changes.contentOpen) {
			if (changes.contentOpen.currentValue === true && vm.activeContent.id === vm.config.id) {
				vm.open();
			} else {
				vm.close();
			}
		}
		if (changes.activeContent) {
			vm.activeContent = changes.activeContent.currentValue;
		}
	};
};

export default controller;
