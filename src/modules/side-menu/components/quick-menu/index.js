import template from './quick-menu.template.html';
import './quick-menu.style.scss';
import controller from './quick-menu.controller';

const quickMenu = {
	bindings: {
		config: '<'
	},
	controller,
	controllerAs: 'vm',
	template
};

export default quickMenu;
