import template from './subCategory.template.html';
import './subCategory.style.css';
import controller from './subCategory.controller';

const subCategory = {
	bindings: {
		label: '@'
	},
	controller,
	template,
	transclude: true
};

export default subCategory;
