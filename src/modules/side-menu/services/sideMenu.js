const service = function () {
	this.menuConfig = undefined;
	this.setMenuConfig = config => { this.menuConfig = config; };
	this.getMenuConfig = () => this.menuConfig;
};

export default service;
