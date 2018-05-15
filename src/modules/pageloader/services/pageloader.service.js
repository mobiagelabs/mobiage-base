const service = function () {
	this.open = undefined;
	this.close = undefined;

	this.registerComponentCallback = (open, close) => {
		this.open = open;
		this.close = close;
	};
};

export default service;
