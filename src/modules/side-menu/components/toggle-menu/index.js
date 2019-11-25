import template from './toggle-menu.template.html'
import './toggle-menu.style.scss'
import controller from './toggle-menu.controller'

const toggleMenu = {
	bindings: {
		config: '<'
	},
	controller,
	controllerAs: 'vm',
	template
};

export default toggleMenu
