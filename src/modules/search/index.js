import controller from './controllers/search';
import template from './views/search.html';
import './css/style.desktop.css';

import input from './components/input';

const component = {
	// bindings: {},
	template,
	controller
};

angular.module('mbgBaseTopbarSearch', [])
	.component('mbgBaseTopbarSearch', component)
	.component('mbgBaseTopbarInput', input);
