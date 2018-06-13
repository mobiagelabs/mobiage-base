const controller = function (MbgFooterService) {
	const vm = this;

	vm.open = (config) => {
		console.log('ABRIR FOOTER', config);
	};

	vm.close = () => {
		console.log('FECHAR FOOTER');
	};

	vm.$onInit = () => {
		MbgFooterService.registerComponentCallback(vm.open, vm.close);
	};
};

export default controller;
