import template from './btn.template.html';
import './btn.style.scss';
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
		tag: '=?',
		config: '=?',
		hotkey: '@',
		keys: '=?'
	},
	template,
	controller,
	controllerAs: 'vm'
};

export default btn;
