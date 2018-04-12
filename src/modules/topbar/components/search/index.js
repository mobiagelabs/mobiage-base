import controller from './controllers/search';
import template from './templates/search.template.html';
import './styles/style.search.scss';

import input from './components/input';
import line from './components/result-line';

const component = {
	bindings: {
		config: '='
	},
	template,
	controller
};

angular.module('mbgBaseTopbarSearch', [])
	.component('mbgBaseTopbarSearch', component)
	.component('mbgBaseTopbarInput', input)
	.component('mbgBaseTopbarResultLine', line);
