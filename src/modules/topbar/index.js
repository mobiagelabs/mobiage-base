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
	controller,
	controllerAs: 'vm'
};

angular.module('mb.topbar', ['mb.topbar.search', 'mb.topbar.user'])
	.component('mbTopbar', component)
	.component('mbTopbarNotifications', notifications);
