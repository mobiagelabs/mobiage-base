const controller = function ($scope, hotkeys, $timeout, MbgNotification) {
	const vm = this;
	vm.translateY = '';
	vm.height = '100vh';
	vm.topage = false;

	const updateTransform = (translateY, height) => {
		vm.translateY = translateY;
		vm.height = height;
	};

	vm.$onInit = () => {
		hotkeys.bindTo($scope).add({
			combo: 't o p a g e enter enter',
			callback() {
				$timeout(() => {
					vm.topage = true;
					$timeout(() => {
						vm.topage = false;
					}, 5000);
				});
			}
		});
		MbgNotification.registerContentCallback(updateTransform);
	};
};

export default controller;
