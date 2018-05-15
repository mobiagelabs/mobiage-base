import template from './item.template.html';

const item = {
	bindings: {
		config: '<',
		firstChild: '<',
		lastChild: '<'
	},
	template,
	controllerAs: 'vm'
};

export default item;
