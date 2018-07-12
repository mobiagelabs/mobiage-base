import controller from './cashier.controller';
import template from './cashier.template.html';
import './cashier.styles.scss';

const component = {
	bindings: {
		config: '='
	},
	template,
	controller
};

export default component;
