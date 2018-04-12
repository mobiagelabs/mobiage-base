import controller from './controllers/topbar.controller';
import template from './templates/topbar.template.html';
import './styles/topbar.style.scss';

import notifications from './components/notifications';
import './components/search';
import './components/user';

const component = {
	bindings: {
		config: '='
	},
	template,
	controller
};

angular.module('mbgBaseTopbar', ['mbgBaseTopbarSearch', 'mbgBaseTopbarUser'])
	.component('mbgBaseTopbar', component)
	.component('mbgBaseTopbarNotifications', notifications);
