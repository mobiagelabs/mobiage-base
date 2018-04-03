import controller from './controllers/topbar';
import template from './views/topbar.html';
import './css/style.desktop.css';

import user from './components/user';
import changeSoftware from './components/changeSoftware';

import '../search/';

const component = {
	bindings: {
		config: '='
	},
	template,
	controller
};

angular.module('mbgBaseTopbar', ['mbgBaseTopbarSearch'])
	.component('mbgBaseTopbar', component)
	.component('mbgBaseTopbarUser', user)
	.component('mbgBaseTopbarChangeSoftware', changeSoftware);
