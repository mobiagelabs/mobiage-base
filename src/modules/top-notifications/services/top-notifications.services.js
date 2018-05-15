const service = function () {
	/*
		Essa service torna possível a comunicação entre
		os componentes do modulo e a criação de novas notificações
		em qualquer parte do software
	*/
	/* Função que abrirá novas notificações */
	this.openNotification = undefined;
	/* Função responsável por atualizar o conteúdo do sistema quando uma notificação fixa abrir */
	this.updateContentTransform = undefined;

	/* Registro da função que abrirá notificações */
	this.registerComponentCallbacks = (open) => {
		this.openNotification = open;
	};

	/* Registro da função que atualizará a posição do conteúdo do sistema */
	this.registerContentCallback = (update) => {
		this.updateContentTransform = update;
	};

	/* formato: { close: fn(), config } */
	this.fixedNotification = undefined;
	this.registerFixed = (notification) => { this.fixedNotification = notification; this.updateFloatNotif(); };
	this.closeFixedNotif = () => {
		if (this.fixedNotification !== undefined) {
			this.fixedNotification.close(this.fixedNotification.config);
			this.fixedNotification = undefined;
			this.updateFloatNotif();
		}
	};

	this.toastNotification = undefined;
	this.registerToast = (notification) => { this.toastNotification = notification; };
	this.closeToastNotif = () => {
		if (this.toastNotification !== undefined) {
			this.toastNotification.close(this.toastNotification.config);
			this.toastNotification = undefined;
		}
	};

	this.floatNotifications = [];
	this.registerFloat = (notification) => {
		this.floatNotifications.push(notification);
	};
	this.updateFloatNotif = () => {
		let stackLevel = 0;
		this.floatNotifications.forEach((notif) => {
			notif.update(stackLevel);
			stackLevel += 1;
		});
	};
	this.closeFloatNotif = (id) => {
		if (this.floatNotifications.length > 0) {
			const floatToClose = this.floatNotifications.filter((value) => value.config.id === id);
			floatToClose.forEach((float) => {
				float.close(float.config);
			});
			this.floatNotifications = this.floatNotifications.filter((value) => value.config.id !== id);
			this.updateFloatNotif();
		}
	};
};

export default service;
