import controller from './user.controller';
import template from './user.template.html';
import './user.style.css';

const component = {
	bindings: {
		config: '='
	},
	controller,
	template
};

export default component;
