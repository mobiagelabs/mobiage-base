import controller from './link.controller';
import template from './link.template.html';
import './link.style.scss';

const component = {
	bindings: {
		actionType: '<',
		action: '<'
	},
	controller,
	controllerAs: 'vm',
	template,
	transclude: true
};

export default component;
