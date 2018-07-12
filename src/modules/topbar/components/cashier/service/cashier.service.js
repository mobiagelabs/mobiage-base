const cashierService = function () {
	const service = this;

	service.configCashier = {};

	let execAfterRegister = false;
	service.updateComponent = () => {
		execAfterRegister = true;
	};

	service.setCashier = (setting) => {
		service.configCashier = setting;
		service.updateComponent();
	};

	service.updateCashier = (setting) => {
		service.configCashier = setting;
		if (execAfterRegister) {
			service.startFunction();
		}
		service.updateComponent();
	};

	service.registerCashier = (setting) => {
		service.startFunction = setting;
		if (execAfterRegister === true) {
			service.startFunction();
		}
	};

	return service;
};

export default cashierService;
