import template from './link.template.html';
import controller from './link.controller';
import './link.style.scss';

const component = {
	bindings: {
		actionType: '=',
		action: '=',
		closeMenu: '&',
		internalCallback: '&?'
	},
	template,
	controller,
	controllerAs: 'vm',
	transclude: true
};

export default component;
