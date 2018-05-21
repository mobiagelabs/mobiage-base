const controller = function (MbgPageLoader, $timeout, $q, hotkeys, $scope) {
	const vm = this;
	vm.hide = true;
	vm.active = false;
	vm.text = 'Carregando';
	vm.promise = undefined;

	const setHotkeys = () => {
		hotkeys.bindTo($scope).add({
			combo: 'esc',
			callback(event) {
				event.preventDefault();
				vm.close();
			}
		});
	};

	const removeHotkeys = () => {
		hotkeys.del('esc');
	};

	vm.open = (promise, title = 'Carregando') => {
		setHotkeys();
		vm.hide = false;
		vm.text = title;
		$timeout(() => {
			vm.active = true;
		}, 50);
		return promise.finally(() => { vm.close(); });
	};

	vm.close = () => {
		removeHotkeys();
		vm.active = false;
		$timeout(() => {
			vm.hide = true;
			vm.endPromise();
		}, 500);
	};

	vm.createPromise = () => {
		if (vm.promise === undefined && vm.active === false && vm.hide === true) {
			vm.promise = $q.defer();
			vm.open(vm.promise.promise);
		}
	};

	vm.endPromise = () => {
		if (vm.promise !== undefined) {
			vm.promise.resolve();
			vm.promise = undefined;
		}
	};

	vm.$onInit = () => {
		MbgPageLoader.registerComponentCallback(vm.open, vm.close, vm.createPromise, vm.endPromise);
	};
};

export default controller;
