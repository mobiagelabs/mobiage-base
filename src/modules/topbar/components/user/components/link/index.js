import template from './link.template.html';
import controller from './link.controller';
import './link.style.scss';

const component = {
	bindings: {
		actionType: '=',
		action: '='
	},
	template,
	controller,
	transclude: true
};

export default component;
