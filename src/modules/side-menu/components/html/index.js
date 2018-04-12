import controller from './html.controller';
import template from './html.template.html';

const component = {
	bindings: {
		html: '<'
	},
	controller,
	template,
	transclude: true
};

export default component;
