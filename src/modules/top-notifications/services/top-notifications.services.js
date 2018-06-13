const service = function () {
	/*
		Essa service torna possível a comunicação entre
		os componentes do modulo e a criação de novas notificações
		em qualquer parte do software
	*/

	/*
		Para não existir mais erros de OpenNotifications undefined,
		guardo todas as notificações que são requisitadas até a definição
		da função, e depois executo elas quando o componente é inicializado
	*/
	const preRegisterNotificationBuffer = [];
	this.openNotification = (notif) => {
		preRegisterNotificationBuffer.push(notif);
	};
	/* Função responsável por atualizar o conteúdo do sistema quando uma notificação fixa abrir */
	this.updateContentTransform = undefined;

	/* Registro da função que abrirá notificações */
	this.registerComponentCallbacks = (open) => {
		this.openNotification = open;
		/* Execução das notificações em buffer */
		preRegisterNotificationBuffer.forEach((notif) => {
			this.openNotification(notif);
		});
	};

	/* Registro da função que atualizará a posição do conteúdo do sistema */
	this.registerContentCallback = (update) => {
		this.updateContentTransform = update;
	};

	/* * Fixed Notification * */
	this.fixedNotification = undefined;
	this.fixedNotifBuffer = [];
	this.registerFixed = (notification) => {
		/* formato: { close: fn(), config } */
		this.fixedNotifBuffer.push(notification);
		this.updateFloatNotif();
	};
	this.updateFixedNotif = () => {
		let stackLevel = 0;
		this.fixedNotifBuffer.forEach((notif) => {
			notif.update(stackLevel, notif.config);
			stackLevel += 1;
		});
	};
	this.closeFixedNotif = (id) => {
		if (this.fixedNotifBuffer.length > 0) {
			/* Notificação á ser fechada */
			const notifToClose = this.fixedNotifBuffer.filter((value) => value.config.id === id);
			/* Remoção da notificação á ser fechada */
			this.fixedNotifBuffer = this.fixedNotifBuffer.filter((value) => value.config.id !== id);
			notifToClose.forEach((notif) => {
				notif.close(notif.config);
			});
			this.updateFloatNotif();
			this.updateFixedNotif();
		}
	};

	/* * Float Notification * */
	this.floatNotifBuffer = [];
	this.registerFloat = (notification) => {
		this.floatNotifBuffer.push(notification);
	};
	this.updateFloatNotif = () => {
		let stackLevel = 0;
		this.floatNotifBuffer.forEach((notif) => {
			notif.update(stackLevel, notif.config);
			stackLevel += 1;
		});
	};
	this.closeFloatNotif = (id) => {
		if (this.floatNotifBuffer.length > 0) {
			const floatToClose = this.floatNotifBuffer.filter((value) => value.config.id === id);
			floatToClose.forEach((float) => {
				float.close(float.config);
			});
			this.floatNotifBuffer = this.floatNotifBuffer.filter((value) => value.config.id !== id);
			this.updateFloatNotif();
		}
	};

	/* * Toast Notification * */
	this.toastNotifBuffer = [];
	this.registerToast = (notification) => {
		this.toastNotifBuffer.push(notification);
	};
	this.closeToastNotif = (id) => {
		if (this.toastNotifBuffer.length > 0) {
			const toastToClose = this.toastNotifBuffer.filter((value) => value.config.id === id);
			toastToClose.forEach((toast) => {
				toast.close(toast.config);
			});
			this.toastNotifBuffer = this.toastNotifBuffer.filter((value) => value.config.id !== id);
		}
	};
};

export default service;
