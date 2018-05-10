const controller = function ($timeout, topNotificationsService) {
	const vm = this;
	const mouthPop = new Audio('resources/audio/mouth-pop.mp3');
	let animationDuration = 500;
	let notifCount = 0;
	let notifHeight = 50;
	vm.config = undefined;
	vm.classes = {};
	vm.top = 0;
	vm.bottom = 0;
	vm.active = false;
	vm.containerTransform = '';

	const timeouts = [];

	vm.openNotif = (config) => {
		const activeFixed = () => {
			vm.active = true;
			topNotificationsService.updateContentTransform(`translateY(${notifHeight}px)`);
			topNotificationsService.registerFixed({ close: vm.closeNotif, config });
			/* Tempo de espera da configuração */
			if (config.duration && config.duration !== 'fixed') {
				const durationWait = $timeout(() => {
					topNotificationsService.closeFixedNotif();
				}, config.duration - animationDuration);
				timeouts.push(durationWait);
			}
		};

		const activeFloat = () => {
			vm.active = true;
			topNotificationsService.registerFloat({ close: vm.closeNotif, config, update: vm.updateFloatNotif });
			/* Tempo de espera da configuração */
			const durationWait = $timeout(() => {
				topNotificationsService.closeFloatNotif(config.id);
			}, config.duration - animationDuration);

			const soundWait = $timeout(() => {
				mouthPop.play();
			}, 100);

			timeouts.push(durationWait);
			timeouts.push(soundWait);
		};

		const activeToast = () => {
			vm.active = true;
			topNotificationsService.registerToast({ close: vm.closeNotif, config });
			/* Tempo de espera da configuração */
			if (config.duration && config.duration !== 'fixed') {
				const durationWait = $timeout(() => {
					topNotificationsService.closeToastNotif();
				}, config.duration - animationDuration);
				timeouts.push(durationWait);
			}
		};

		/* Ativação: */
		const activeWait = $timeout(() => {
			switch (config.variation) {
				case 'fixed': {
					if (topNotificationsService.fixedNotification !== undefined) {
						/* Fecha a notificação fixa anterior caso exista */
						topNotificationsService.closeFixedNotif();
						const animationWait = $timeout(() => {
							activeFixed();
						}, animationDuration + 50);
						timeouts.push(animationWait);
					} else {
						activeFixed();
					}
					break;
				}
				case 'float': {
					activeFloat();
					break;
				}
				default: {
					if (topNotificationsService.toastNotification !== undefined) {
						/* Fecha a notificação fixa anterior caso exista */
						topNotificationsService.closeToastNotif();
						const animationWait = $timeout(() => {
							activeToast();
						}, animationDuration + 50);
						timeouts.push(animationWait);
					} else {
						activeToast();
					}
				}
			}
		}, 50);
		timeouts.push(activeWait);
	};

	vm.closeNotif = (config) => {
		/* Cancela todos os timeouts */
		timeouts.forEach((timeout) => {
			$timeout.cancel(timeout);
		});
		vm.active = false;
		if (config.variation === 'fixed') {
			topNotificationsService.updateContentTransform('translateY(0px)');
		}
		$timeout(() => {
			vm.closeNotification({ id: config.id, config });
		}, animationDuration + 50);
	};

	vm.updateFloatNotif = (stackLevel) => {
		const fixedNotifHeight = topNotificationsService.fixedNotification !== undefined ? 50 : 0;
		const translateY = `translateY(calc(${stackLevel * 100}% + ${fixedNotifHeight}px))`;
		const translateX = 'translateX(-50%)';
		vm.containerTransform = `${translateX} ${translateY}`;
	};

	vm.configNotification = (config) => {
		switch (config.type) {
			case 'info': {
				vm.classes.notifType = 'mb-n-info';
				break;
			}
			case 'warn': {
				vm.classes.notifType = 'mb-n-warn';
				break;
			}
			case 'error': {
				vm.classes.notifType = 'mb-n-err';
				break;
			}
			case 'success': {
				vm.classes.notifType = 'mb-n-succ';
				break;
			}
			default: {
				vm.classes.notifType = 'mb-n-info';
			}
		}

		let translateX;
		let translateY;

		switch (config.variation) {
			case 'fixed': {
				animationDuration = 500;
				vm.classes.notifVariation = 'mb-n-fixed';
				notifHeight = 50;
				notifCount = vm.fixedCount - 1;
				translateY = 'translateY(0px)';
				translateX = 'translateX(0%)';
				break;
			}
			case 'float': {
				animationDuration = 500;
				vm.classes.notifVariation = 'mb-n-float';
				notifHeight = 60;
				notifCount = topNotificationsService.floatNotifications.length;
				const fixedNotifHeight = topNotificationsService.fixedNotification !== undefined ? 50 : 0;
				translateY = `translateY(calc(${notifCount * 100}% + ${fixedNotifHeight}px))`;
				translateX = 'translateX(-50%)';
				break;
			}
			default: {
				animationDuration = 250;
				vm.classes.notifVariation = 'mb-n-toast';
				notifHeight = 60;
				notifCount = vm.toastCount - 1;
				translateY = 'translateY(0px)';
				translateX = 'translateX(-50%)';
				break;
			}
		}

		vm.containerTransform = `${translateX} ${translateY}`;
		vm.openNotif(config);
	};

	vm.$onInit = () => {
		vm.configNotification(vm.notif);
	};

	vm.$onDestroy = () => {
		timeouts.forEach((timeout) => {
			$timeout.cancel(timeout);
		});
	};
};

export default controller;
