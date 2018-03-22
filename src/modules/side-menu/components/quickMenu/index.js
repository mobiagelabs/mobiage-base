import template from './quickMenu.template.html';
import './quickMenu.style.css';
import controller from './quickMenu.controller';

const quickMenu = {
	bindings: {
		config: '<'
	},
	controller,
	template
};

export default quickMenu;
