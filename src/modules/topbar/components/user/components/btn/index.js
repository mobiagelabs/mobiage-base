import template from './btn.template.html';
import controller from './btn.controller';
import './btn.style.scss';

const component = {
	bindings: {
		config: '=',
		internalCallback: '&?'
	},
	template,
	controller
};

export default component;
