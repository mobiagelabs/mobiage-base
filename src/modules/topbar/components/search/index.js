import controller from './controllers/search.controller';
import template from './templates/search.template.html';
import './styles/search.style.scss';

import input from './components/input';
import line from './components/result-line';

const component = {
	bindings: {
		config: '='
	},
	template,
	controller
};

angular.module('mb.topbar.search', [])
	.component('mbTSearch', component)
	.component('mbTSearchInput', input)
	.component('mbTResultLine', line);
