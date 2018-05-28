const controller = function ($timeout, MbgNotification) {
	const vm = this;
	/* !!!! Definir esse som no componente pai !!!! */
	// const mouthPop = new Audio('resources/audio/mouth-pop.mp3');
	let animationDuration;
	vm.config = undefined;
	vm.classes = {
		notifType: undefined,
		notifVariation: undefined
	};
	vm.notifHeight = {
		fixed: 50,
		float: 50,
		toast: 60
	};
	vm.active = false;
	vm.containerTransform = '';

	const timeouts = [];

	vm.open = (config) => {
		/* Configura o estilo */
		switch (config.type) {
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

		/* Configura o tipo */
		switch (config.variation) {
			case 'fixed': {
				MbgNotification.registerFixed({ close: vm.close, config, update: vm.update });
				animationDuration = 500;
				vm.classes.notifVariation = 'mb-n-fixed';
				const notifCount = MbgNotification.fixedNotifBuffer.length;
				const translateY = `translateY(${(notifCount - 1) * vm.notifHeight.fixed}px)`;
				const translateX = 'translateX(0%)';
				vm.zIndex = 23700 - notifCount;
				vm.containerTransform = `${translateX} ${translateY}`;
				MbgNotification.updateContentTransform(`translateY(${(notifCount) * vm.notifHeight.fixed}px)`, `calc(100vh - ${(notifCount) * vm.notifHeight.fixed}px)`);
				if (config.duration && config.duration !== 'fixed') {
					const durationWait = $timeout(() => {
						MbgNotification.closeFixedNotif(config.id);
					}, config.duration);
					timeouts.push(durationWait);
				}
				vm.active = true;
				break;
			}
			case 'float': {
				MbgNotification.registerFloat({ close: vm.close, config, update: vm.update });
				const notifCount = MbgNotification.floatNotifBuffer.length;
				animationDuration = 500;
				vm.classes.notifVariation = 'mb-n-float';
				const fixedNotifHeight = MbgNotification.fixedNotifBuffer.length * vm.notifHeight.fixed;
				const translateY = `translateY(calc(${(notifCount - 1) * 100}% + ${fixedNotifHeight}px))`;
				const translateX = 'translateX(-50%)';
				vm.containerTransform = `${translateX} ${translateY}`;
				const durationWait = $timeout(() => {
					MbgNotification.closeFloatNotif(config.id);
				}, config.duration);
				// const soundWait = $timeout(() => {
				// 	mouthPop.play();
				// }, 100);
				// timeouts.push(soundWait);
				vm.active = true;
				timeouts.push(durationWait);
				break;
			}
			default: {
				animationDuration = 250;
				vm.classes.notifVariation = 'mb-n-toast';
				const translateY = 'translateY(0px)';
				const translateX = 'translateX(-50%)';
				vm.containerTransform = `${translateX} ${translateY}`;
				const active = () => {
					MbgNotification.registerToast({ close: vm.close, config });
					if (config.duration && config.duration !== 'fixed') {
						const durationWait = $timeout(() => {
							MbgNotification.closeToastNotif();
						}, config.duration);
						timeouts.push(durationWait);
					}
					const activeWait = $timeout(() => {
						vm.active = true;
					});
					timeouts.push(activeWait);
				};

				if (MbgNotification.toastNotification !== undefined) {
					MbgNotification.closeToastNotif();
					const animationWait = $timeout(() => {
						active();
					}, animationDuration + 50);
					timeouts.push(animationWait);
				} else {
					active();
				}
				break;
			}
		}
	};

	vm.close = (config) => {
		switch (config.variation) {
			case 'fixed': {
				MbgNotification.updateContentTransform(`translateY(${vm.notifHeight.fixed * MbgNotification.fixedNotifBuffer.length}px)`, `calc(100vh - ${vm.notifHeight.fixed * MbgNotification.fixedNotifBuffer.length}px)`);
				break;
			}
			default: {
				break;
			}
		}
		vm.active = false;
		$timeout(() => {
			vm.closeNotification({ id: config.id, config });
		}, animationDuration + 50);
		timeouts.forEach((timeout) => { $timeout.cancel(timeout); });
	};

	vm.update = (stackLevel, config) => {
		let translateX;
		let translateY;
		switch (config.variation) {
			case 'fixed': {
				translateX = 'translateX(0%)';
				vm.zIndex = 23700 - stackLevel;
				translateY = `translateY(${stackLevel * 100}%)`;
				break;
			}
			case 'float': {
				translateX = 'translateX(-50%)';
				const fixedNotif = MbgNotification.fixedNotifBuffer.length * vm.notifHeight.fixed;
				translateY = `translateY(calc(${stackLevel * 100}% + ${fixedNotif}px))`;
				break;
			}
			default: {
				break;
			}
		}
		vm.containerTransform = `${translateX} ${translateY}`;
	};

	vm.$onInit = () => {
		vm.open(vm.notif);
	};
};

export default controller;
