const environmentService = function () {
	const service = this;

	service.registerCBEnvironment = (cb) => service.cb = cb

	service.setIsDemo = (environment, cb) => {
		if (!service.cb) {
			setTimeout(() => {
				service.setIsDemo(environment, cb)
			}, 1000)
		} else {
			service.cb(environment, cb)
		}
	}

	return service;
};

export default environmentService;
