const controller = function ($scope, hotkeys, $timeout, topNotificationsService) {
	const vm = this;
	vm.translateY = '';
	vm.topage = false;

	const updateTransform = (translateY) => { vm.translateY = translateY; };

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
		topNotificationsService.registerContentCallback(updateTransform);
	};
};

export default controller;
