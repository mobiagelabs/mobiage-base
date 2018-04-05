import controller from './link.controller';
import template from './link.template.html';

const component = {
	bindings: {
		actionType: '<',
		action: '<'
	},
	controller,
	template,
	transclude: true
};

export default component;
