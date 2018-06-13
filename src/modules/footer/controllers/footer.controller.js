const controller = function (MbgFooterService) {
	const vm = this;

	vm.$onInit = () => {
		MbgFooterService.open({ });
	};

	vm.$onDestroy = () => {
		MbgFooterService.close();
	};
};

export default controller;
