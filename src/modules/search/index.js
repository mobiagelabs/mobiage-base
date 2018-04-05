import controller from './controllers/search';
import template from './views/search.html';
import './css/style.desktop.css';
import './css/style.mobile.css';

import input from './components/input';
import line from './components/resultLine';

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
