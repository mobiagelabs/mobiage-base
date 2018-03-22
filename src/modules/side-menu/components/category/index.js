import template from './category.template.html';
import './category.style.css';
import controller from './category.controller';

const category = {
	bindings: {
		label: '@'
	},
	template,
	controller: [controller],
	transclude: true
};

export default category;
