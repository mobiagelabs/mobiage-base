const controller = function ($state, mbSidemenuService, MbgNotification, $timeout) {
	this.$onInit = () => {
		// console.log(this);
	};

	this.pressBtn = async (vm) => {
		let access = true
		if (!!vm.config.key && (vm.keys || []).indexOf(vm.config.key) === -1) {
			access = await this.authAccess()
		}
		if (access) {
			switch (vm.actionType) {
				case 'state':
					const regexParams = new RegExp(/\((.*?)\)/gm).exec(vm.action)
					const state = vm.action.replace(new RegExp(/\((.*?)\)/, 'gm'), '')
					const params = (regexParams || []).length > 0 ? regexParams[1] : {}
					$state.go(state, params)
					break
				case 'link':
					location.href = vm.action
					break
				case 'function':
					vm.action()
					break
			}
		} else {
			$timeout(() => {
				MbgNotification.openNotification({
					type: 'error',
					variation: 'toast',
					duration: 3000,
					text: 'Acesso negado'
				})
			})
		}
	}

	this.authAccess = async () => {
		const config = mbSidemenuService.getMenuConfig()
		if (config.authAccess) {
			return config.authAccess()
		} else {
			return true
		}
	}
};

export default controller;
