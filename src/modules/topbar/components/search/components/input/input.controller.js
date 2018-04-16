const controller = function () {
	this.focus = false;

	this.focusInputInside = () => {
		this.focus = true;
		if (typeof this.onFocus === 'function') {
			this.onFocus();
		}
	};
	this.blurInputInside = () => {
		this.focus = false;
		this.value = null;
		if (typeof this.onBlur === 'function') {
			this.onBlur();
		}
	};
};

export default controller;
