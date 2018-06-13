const controller = function ($scope, hotkeys, $timeout, MbgNotification) {
	const vm = this;
	vm.translateY = '';
	vm.height = '100vh';
	vm.topage = false;

	const updateTransform = (translateY, height) => {
		vm.transition = 'transform 0.5s ease, height 0.5s 0.5s ease';
		vm.translateY = translateY;
		vm.height = height;
		$timeout(() => {
			vm.transition = 'none';
		}, 1100);
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
