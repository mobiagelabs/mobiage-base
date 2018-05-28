const controller = function (MbgNotification) {
	const vm = this;
	vm.notificationsStack = [];

	vm.defaults = {
		type: 'info',
		variation: 'fixed',
		text: 'Olá mundo, esta é uma notificação',
		duration: 4000,
		icon: 'fas fa-exclamation-circle',
		actionButton: false,
		action: undefined,
		actionText: 'Clique aqui'
	};

	vm.notification = undefined;

	vm.openNotification = (notif) => {
		vm.notification = Object.assign({ id: Math.random().toString(36).slice(2) }, vm.defaults, notif);
		vm.notificationsStack.push(vm.notification);
		return vm.notification;
	};

	vm.closeNotification = (id) => {
		vm.notificationsStack = vm.notificationsStack.filter((value) => value.id !== id);
	};

	vm.$onInit = () => {
		MbgNotification.registerComponentCallbacks(vm.openNotification);
	};
};

export default controller;
