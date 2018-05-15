import template from './btn.template.html';
import './btn.style.scss';

const component = {
	bindings: {
		config: '=',
		internalCallback: '&?',
		otherOrganizations: '=',
		closeMenu: '&'
	},
	template,
	controllerAs: 'vm'
};

export default component;
