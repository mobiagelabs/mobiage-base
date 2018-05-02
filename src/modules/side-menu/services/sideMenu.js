const service = function () {
	this.openMenu = undefined;
	this.closeMenu = undefined;
	this.menuConfig = undefined;

	this.setMenuConfig = (config) => { this.menuConfig = config; };
	this.getMenuConfig = () => this.menuConfig;

	this.registerMenuCallback = (open, close) => { this.openMenu = open; this.closeMenu = close; };
};

export default service;
