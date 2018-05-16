const service = function () {
	this.open = undefined;
	this.close = undefined;
	this.createPromise = undefined;
	this.endPromise = undefined;

	this.registerComponentCallback = (open, close, create, end) => {
		this.open = open;
		this.close = close;
		this.createPromise = create;
		this.endPromise = end;
	};
};

export default service;
