import controller from './controllers/topbar';
import template from './views/topbar.html';
import './css/style.desktop.css';
import './css/style.mobile.css';

import user from './components/user';
import userService from './components/user/user.service';
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
	.service('mbgBaseUserService', userService)
	.component('mbgBaseTopbarUser', user)
	.component('mbgBaseTopbarNotifications', notifications);
