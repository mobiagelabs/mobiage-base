import template from './category.template.html';
import './category.style.scss';

const category = {
	bindings: {
		label: '@'
	},
	template,
	transclude: true,
	controllerAs: 'vm'
};

export default category;
