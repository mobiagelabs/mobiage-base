import template from './sub-category.template.html';
import './sub-category.style.scss';
import controller from './sub-category.controller';

const subCategory = {
	bindings: {
		label: '@',
		icon: '@',
		iconSrc: '@',
		iconSize: '@',
		showItens: '<?',
		qtdSubItens: '<?'
	},
	controller,
	controllerAs: 'vm',
	template,
	transclude: true
};

export default subCategory;
