import controller from './controllers/topbar';
import template from './views/topbar.html';
import './css/style.desktop.css';
import './css/style.mobile.css';

import user from './components/user';
import notifications from './components/notifications';

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
	.component('mbgBaseTopbarNotifications', notifications);
