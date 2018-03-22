import template from './input.template.html';
import controller from './input.controller';
import './input.styles.css';

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
