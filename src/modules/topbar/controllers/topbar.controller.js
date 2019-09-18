const controller = function (mbSidemenuService) {
	const vm = this;

	vm.openMenu = () => {
		mbSidemenuService.openMenu();
	};

	vm.$onInit = () => {
		if (vm.config.usersBirthday) {
			vm.config.usersBirthday.getUsers().then((response) => {
				vm.config.usersBirthday.users = response
			})
		}
	}


};

export default controller;
