const sideContentService = function () {
	const service = this;
	service.contentBuffer = [];

	let execAfterRegister = false;
	service.updateComponent = () => {
		execAfterRegister = true;
	};

	service.add = (content) => {
		const conteudo = Object.assign({
			template: '',
			icon: 'fas fa-question',
			iconColor: '#fff',
			btnBgColor: '#00d5d2',
			onOpen: () => {},
			onClose: () => {},
			bgHide: false,
		}, content, { id: Math.random().toString(36).slice(2) });
		service.contentBuffer.push(conteudo);
		service.updateComponent();
	};

	service.registerComponent = (update, close) => {
		service.updateComponent = update;
		service.close = close;
		if (execAfterRegister === true) {
			service.updateComponent();
		}
	};

	service.btnBuffer = [];
	service.registerBtn = (btn) => {
		service.btnBuffer.push(btn);
		service.updateAllBtn();
	};

	service.updateAllBtn = () => {
		service.btnBuffer.forEach((btn, index) => {
			btn.update(index, service.btnBuffer.length);
		});
	};

	service.close = () => {};

	return service;
};

export default sideContentService;
