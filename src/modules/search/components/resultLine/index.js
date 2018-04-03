import controller from './resultLine.controller';
import template from './resultLine.template.html';
import './resultLine.styles.css';

const component = {
	bindings: {
		line: '='
	},
	template,
	controller
};

export default component;
