import template from './loading.template.html';
import './loading.style.scss';

const component = {
	bindings: {
		width: '<',
		height: '<',
		margin: '<'
	},
	template,
	controllerAs: 'vm'
};

export default component;
