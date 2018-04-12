import template from './input.template.html';
import controller from './input.controller';
import './input.style.scss';

const input = {
	bindings: {
		icon: '@',
		name: '@',
		type: '@',
		placeholder: '@',
		onFocus: '&?',
		onBlur: '&?',
		onChangeValue: '&?'
	},
	controller,
	template
};

export default input;
