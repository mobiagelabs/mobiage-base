import controller from './user.controller';
import template from './user.template.html';
import './user.style.desktop.css';
import './user.style.mobile.css';

const component = {
	bindings: {
		config: '='
	},
	controller,
	template
};

export default component;
