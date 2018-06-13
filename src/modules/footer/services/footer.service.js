const serviceFn = function () {
	const service = this;
	let compOpen;
	let compClose;

	service.registerComponentCallback = (open, close) => {
		compOpen = open;
		compClose = close;
	};

	service.open = (config) => {
		if (compOpen !== undefined) {
			compOpen(config);
		}
	};

	service.close = () => {
		if (compClose !== undefined) {
			compClose();
		}
	};
};

export default serviceFn;
