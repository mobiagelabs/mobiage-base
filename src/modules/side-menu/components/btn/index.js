import template from './btn.template.html';
import './btn.style.css';
import controller from './btn.controller';

const btn = {
	bindings: {
		label: '@',
		icon: '@',
		iconSrc: '@',
		iconSize: '@',
		action: '<',
		actionType: '<',
		iconSide: '@',
		firstChild: '<',
		lastChild: '<',
		hotkey: '@'
	},
	template,
	controller
};

export default btn;
