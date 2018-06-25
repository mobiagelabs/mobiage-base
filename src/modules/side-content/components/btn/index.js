import template from './btn.template.html';
import controller from './btn.controller';
import './btn.style.scss';

const component = {
	bindings: {
		config: '=',
		toggleFn: '&',
		contentOpen: '<',
		activeContent: '<'
	},
	template,
	controller,
	controllerAs: 'vm'
};

export default component;
