const service = function UserService() {
	this.user = {};
	this.userComponentCallback = () => { };
	/* Usamos o object assign para que não seja substituido o objeto inteiro ao passar apenas algumas configurações */
	this.setUser = (newUser) => {
		this.user = Object.assign({}, this.user, newUser);
		this.userComponentCallback(this.user);
	};
	this.getUser = () => this.user;
	this.setComponentCallback = (fn) => { this.userComponentCallback = fn; };
};

export default service;
