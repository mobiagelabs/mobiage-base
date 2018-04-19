import controller from './result-line.controller';
import template from './result-line.template.html';
import './result-line.style.scss';

const component = {
	bindings: {
		line: '<',
		index: '<',
		selected: '<',
		onSelect: '&'
	},
	template,
	controller
};

export default component;
